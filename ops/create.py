from datetime import datetime
import json
import logging
import os
import uuid
import boto3

dynamodb = boto3.resource('dynamodb')


def create(event, context):
    """Create and save item to the database. Return the result."""
    req = json.loads(event['body'])

    # Ensure 'name' and 'country' were received.
    try:
        name = req['name']
        country = req['country']
    except:
        logging.error("Unable to create database item.")
        raise Exception("Missing required value for name or country.")

    # Prepare the database item.
    timestamp = str(datetime.now())
    item = {
        'id': str(uuid.uuid1()),
        'name': name,
        'country': country,
        'created_at': timestamp,
    }

    # Save item to the database.
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])
    table.put_item(Item=item)

    response = {
        "statusCode": 200,
        "body": json.dumps(item)
    }
    return response
