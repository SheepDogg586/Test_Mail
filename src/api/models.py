from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


favorite_location = db.Table('favorite_location_association',
    db.Column("user_id", db.Integer, db.ForeignKey("user.id", ondelete="CASCADE"), primary_key=True),
    db.Column("location_id", db.Integer, db.ForeignKey("location.id", ondelete="CASCADE"), primary_key=True)
)
favorite_equipment = db.Table('favorite_equipment_association',
    db.Column("user_id", db.Integer, db.ForeignKey("user.id", ondelete="CASCADE"), primary_key=True),
    db.Column("equipment_id", db.Integer, db.ForeignKey("equipment.id", ondelete="CASCADE"), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey("location.id"))
    equipment_id = db.Column(db.Integer, db.ForeignKey("equipment.id"))
    location = db.relationship("Location",
                    secondary=favorite_location,
                    back_populates="user",
                    cascade="all, delete")
    equipment = db.relationship("Equipment",
                    secondary=favorite_equipment,
                    back_populates="user",
                    cascade="all, delete")

    def __ref__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "location": list(map(lambda x: x.serialize(), self.location)),
            "equipment": list(map(lambda x: x.serialize(), self.equipment))
            # do not serialize the password, its a security breach
        }

class Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    alert = db.relationship('Alert', backref='parent',lazy=True)
    user = db.relationship("User",
                    secondary=favorite_location,
                    back_populates="location",
                    passive_deletes=True,)
                    
    def __ref__(self):
        return f'<Location {self.name}>'
        
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "user": list(map(lambda x: x.serialize(), self.user)),
            "alert": list(map(lambda x: x.serialize(), self.alert))
        }

class Equipment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    activity = db.relationship('Activity', backref='parent',lazy=True)
    user = db.relationship("User",
                    secondary=favorite_equipment,
                    back_populates="equipment",
                    passive_deletes=True,)

    def __ref__(self):
        return f'<Equipment {self.name}>'
        
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "user": list(map(lambda x: x.serialize(), self.user)),
            "activity": list(map(lambda x: x.serialize(), self.activity))
        }

class Alert(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(250), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey("location.id"), nullable=False)

    def __repr__(self):
        return self.type
        
    def serialize(self):
        return {
            "id": self.id,
            "type": self.type,
        }

class Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    equipment_id = db.Column(db.Integer, db.ForeignKey("equipment.id"), nullable=False)

    def __repr__(self):
        return self.name
        
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }