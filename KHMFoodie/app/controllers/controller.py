from flask import render_template


def index():
    return render_template('testCustomer.html', title='KHM Foodie', description='Welcome to KHM Foodie! Explore the best food in Cambodia.')
