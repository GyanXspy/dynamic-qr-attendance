"""add_is_verified

Revision ID: 9a9b9c9d9e9f
Revises: 5b92cb901bb2
Create Date: 2026-08-12 10:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9a9b9c9d9e9f'
down_revision: Union[str, None] = '5b92cb901bb2'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Add is_verified column with a default of false
    op.add_column('users', sa.Column('is_verified', sa.Boolean(), server_default=sa.text('false'), nullable=False))
    
    # Update the userrole enum to include 'ADMIN' for PostgreSQL
    # (Render uses Postgres which requires explicit enum updates)
    bind = op.get_bind()
    if bind.engine.name == 'postgresql':
        op.execute("ALTER TYPE userrole ADD VALUE IF NOT EXISTS 'ADMIN'")


def downgrade() -> None:
    op.drop_column('users', 'is_verified')
