from flask import Flask, jsonify, request
from flask_mail import Mail, Message
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'aaquibasrar4@gmail.com'
app.config['MAIL_PASSWORD'] = 'pssgpgfuxwjqryqx'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)


# Index page
@app.route('/')
def index():
    return 'Index page'


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
@app.route('/contact', methods=['POST'])
def send_message():
    name = request.json.get('name')
    email = request.json.get('email')
    message = request.json.get('message')

    msg = Message(subject='Message from Client', sender=email, recipients=['aaquibasrar4@gmail.com'])
    msg.body = message

    try:
        mail.send(msg)
        return jsonify({'message': 'Email sent successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)