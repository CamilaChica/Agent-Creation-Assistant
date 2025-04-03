# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/dbname'
# db = SQLAlchemy(app)

# # Define a simple Agent model to store agent data in the database
# class Agent(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100))
#     type = db.Column(db.String(100))
#     description = db.Column(db.Text)
#     # You can add more fields as necessary

#     def __init__(self, name, type, description):
#         self.name = name
#         self.type = type
#         self.description = description

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#             'type': self.type,
#             'description': self.description
#         }

# @app.route('/agents', methods=['GET'])
# def get_agents():
#     agents = Agent.query.all()
#     return jsonify([agent.to_dict() for agent in agents])

# @app.route('/agents', methods=['POST'])
# def create_agent():
#     data = request.get_json()
#     new_agent = Agent(name=data['name'], type=data['type'], description=data['description'])
#     db.session.add(new_agent)
#     db.session.commit()
#     return jsonify(new_agent.to_dict()), 201

# @app.route('/agents/<int:id>', methods=['GET'])
# def get_agent(id):
#     agent = Agent.query.get_or_404(id)
#     return jsonify(agent.to_dict())

# @app.route('/agents/<int:id>', methods=['PUT'])
# def update_agent(id):
#     data = request.get_json()
#     agent = Agent.query.get_or_404(id)
#     agent.name = data.get('name', agent.name)
#     agent.type = data.get('type', agent.type)
#     agent.description = data.get('description', agent.description)
#     db.session.commit()
#     return jsonify(agent.to_dict())

# @app.route('/agents/<int:id>', methods=['DELETE'])
# def delete_agent(id):
#     agent = Agent.query.get_or_404(id)
#     db.session.delete(agent)
#     db.session.commit()
#     return '', 204

# if __name__ == '__main__':
#     db.create_all()  # Create tables
#     app.run(debug=True)


from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Initialize Flask app and SQLAlchemy
app = Flask(__name__)



# Database configuration (replace with your own PostgreSQL credentials)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/dbname'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable the modification tracking feature

# Initialize the SQLAlchemy object
db = SQLAlchemy(app)

# Example of creating a model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

# Home route to test the app
@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)


