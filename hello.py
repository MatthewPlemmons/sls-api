def hello(event, context):
    """Simple test function."""
    response = {
        "statusCode": 200,
        "body": "Hello world!"
    }
    return response
