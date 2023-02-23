"""empty message

Revision ID: defd5425aa41
Revises: f32fa37b48c6
Create Date: 2023-02-23 01:27:08.897830

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'defd5425aa41'
down_revision = 'f32fa37b48c6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('equipment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=250), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('activity',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=250), nullable=False),
    sa.Column('equipment_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['equipment_id'], ['equipment.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('alert',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(length=250), nullable=False),
    sa.Column('location_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['location_id'], ['location.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorite_equipment_association',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('equipment_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['equipment_id'], ['equipment.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'equipment_id')
    )
    op.create_table('favorite_location_association',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('location_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['location_id'], ['location.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'location_id')
    )
    op.drop_table('association')
    op.drop_table('post')
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('equipment_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'equipment', ['equipment_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('equipment_id')

    op.create_table('post',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('title', sa.VARCHAR(length=250), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='post_pkey')
    )
    op.create_table('association',
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('location_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['location_id'], ['location.id'], name='association_location_id_fkey'),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='association_user_id_fkey'),
    sa.PrimaryKeyConstraint('user_id', 'location_id', name='association_pkey')
    )
    op.drop_table('favorite_location_association')
    op.drop_table('favorite_equipment_association')
    op.drop_table('alert')
    op.drop_table('activity')
    op.drop_table('equipment')
    # ### end Alembic commands ###
