import argparse
from os import path

import pickle
from flask import Flask, request
from flask_cors import CORS
# from tinydb import TinyDB

app = Flask(__name__)
CORS(app)

# db = TinyDB('db.json')
real_time = {}


@app.route('/info', methods=['GET'])
def get_info():
	return {'info': real_time}


@app.route('/api', methods=['POST'])
def api():
	try:
		data = request.json
		real_time[str(data['ip'])] = data

		with open("info.pkl", 'wb') as handle:
			pickle.dump(real_time, handle, protocol=pickle.HIGHEST_PROTOCOL)

		# db.insert(data)
		return 'OK'
	except Exception as e:
		app.logger.error('%s', e)


if __name__ == '__main__':
	parser = argparse.ArgumentParser("Server")
	parser.add_argument("-ip", help="Ip address", type=str, default="localhost")
	parser.add_argument("-port", help="Port", type=int, default=5000)
	args = parser.parse_args()

	if path.isfile("info.pkl"):
		with open("info.pkl", 'rb') as handle:
			real_time = pickle.load(handle)
			print("File loaded")

	app.run(host=args.ip, port=args.port)
