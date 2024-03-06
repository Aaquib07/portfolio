from flask import Flask, jsonify

app = Flask(__name__)


# Index page
@app.route('/')
def index():
    return 'This is the homepage'


# About page
@app.route('/about')
def about():
    return jsonify({
        'name': 'Aaquib',
        'bio': 'A passionate web developer',
        'experience': 'Web Development Intern',
        'education': 'IIEST (B.Tech)'
    })


# Projects page
@app.route('/projects')
def projects():
    return jsonify([
        {
            'name': 'Project 1',
            'description': 'A web development project',
            'link': ''
        },
        {
            'name': 'ML project',
            'description': 'A machine learning project',
            'link': ''
        }
    ])


# Contact page
@app.route('/contact')
def contact():
    return jsonify({
        'email': 'aaquibasrar4@gmail.com',
        'linkedin': 'LinkedIn profile',
        'github': 'Github profile',
    })


if __name__ == '__main__':
    app.run(debug=True)