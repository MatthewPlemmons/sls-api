import json
import os
import boto3

dynamodb = boto3.resource('dynamodb')


def list(event, context):
    """Return all database items in JSON format."""
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])
    objs = table.scan()

    response = {
        "statusCode": 200,
        "body": json.dumps(objs['Items'])
    }
    return response
