const AWS = require('aws-sdk')

const deleteTask = async(event, context) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()

    const { id } = event.pathParameters

    await dynamodb.delete({
        TableName: 'TaskTable',
        Key: {
            id
        }
    }).promise()

    return {
        status: 200,
        body: JSON.stringify({ message: 'Task Deleted'})
    }

}   

module.exports = {
    deleteTask
}