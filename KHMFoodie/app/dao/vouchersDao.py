from app.models.model import Voucher
from app.extensions import db

class VouchersDao:
    @staticmethod
    def get_all_by_restaurant(restaurant_id):
        return Voucher.query.filter_by(
            restaurant_id=restaurant_id,
            active = True
        ).order_by(Voucher.created_at.desc()).all()

    @staticmethod
    def get_by_id_and_restaurant(voucher_id, restaurant_id):
        return Voucher.query.filter_by(
            id = voucher_id,
            restaurant_id = restaurant_id,
            active = True
        ).first()

    @staticmethod
    def create_voucher(voucher):
        db.session.add(voucher)
        db.session.commit()
        return voucher

    @staticmethod
    def save():
        db.session.commit()

    @staticmethod
    def soft_delete(voucher):
        voucher.active = False
        db.session.commit()