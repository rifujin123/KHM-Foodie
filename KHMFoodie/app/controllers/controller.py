from flask import render_template


def index():
    return render_template('testCustomer.html', title='KHM Foodie', description='Welcome to KHM Foodie! Explore the best food in Cambodia.')


def search_customer():
    return render_template('searchCustomer.html', title='Search Customer', description = 'Search for customers in the KHM Foodie database.')
