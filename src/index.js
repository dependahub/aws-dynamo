import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {
	DynamoDBDocumentClient,
	ScanCommand,
	QueryCommand,
	GetCommand,
	PutCommand,
	UpdateCommand,
	DeleteCommand,
} from '@aws-sdk/lib-dynamodb';

class DynamoClass {
	/**
	 * @type {DynamoDBDocumentClient}
	 */
	#db;

	constructor() {
		this.#db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
	}

	/**
	 * @param {object} config
	 * @param {string?} config.region AWS region
	 * @param {string?} config.profile AWS profile
	 */
	configure({region, profile}) {
		this.#db = DynamoDBDocumentClient.from(new DynamoDBClient({
			region,
			profile,
		}));
	}

	/**
	 * @param {import('@aws-sdk/lib-dynamodb').ScanCommandInput} input
	 * @returns {Promise<import('@aws-sdk/lib-dynamodb').ScanCommandOutput>} The result of the scan operation
	 */
	async scan(input) {
		return this.#db.send(new ScanCommand(input));
	}

	/**
	 * @param {import('@aws-sdk/lib-dynamodb').QueryCommandInput} input
	 * @returns {Promise<import('@aws-sdk/lib-dynamodb').QueryCommandOutput>} The result of the query operation
	 */
	async query(input) {
		return this.#db.send(new QueryCommand(input));
	}

	/**
	 * @param {import('@aws-sdk/lib-dynamodb').GetCommandInput} input
	 * @returns {Promise<import('@aws-sdk/lib-dynamodb').GetCommandOutput>} The result of the get operation
	 */
	async get(input) {
		return this.#db.send(new GetCommand(input));
	}

	/**
	 * @param {import('@aws-sdk/lib-dynamodb').PutCommandInput} input
	 * @returns {Promise<import('@aws-sdk/lib-dynamodb').PutCommandOutput>} The result of the put operation
	 */
	async put(input) {
		return this.#db.send(new PutCommand(input));
	}

	/**
	 * @param {import('@aws-sdk/lib-dynamodb').UpdateCommandInput} input
	 * @returns {Promise<import('@aws-sdk/lib-dynamodb').UpdateCommandOutput>} The result of the update operation
	 */
	async update(input) {
		return this.#db.send(new UpdateCommand(input));
	}

	/**
	 * @param {import('@aws-sdk/lib-dynamodb').DeleteCommandInput} input
	 * @returns {Promise<import('@aws-sdk/lib-dynamodb').DeleteCommandOutput>} The result of the delete operation
	 */
	async delete(input) {
		return this.#db.send(new DeleteCommand(input));
	}
}

export const dynamo = new DynamoClass();
