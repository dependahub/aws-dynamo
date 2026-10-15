export const dynamo: DynamoClass;
declare class DynamoClass {
    /**
     * @param {object} config
     * @param {string?} config.region AWS region
     * @param {string?} config.profile AWS profile
     */
    configure({ region, profile }: {
        region: string | null;
        profile: string | null;
    }): void;
    /**
     * @param {import('@aws-sdk/lib-dynamodb').ScanCommandInput} input
     * @returns {Promise<import('@aws-sdk/lib-dynamodb').ScanCommandOutput>} The result of the scan operation
     */
    scan(input: import("@aws-sdk/lib-dynamodb").ScanCommandInput): Promise<import("@aws-sdk/lib-dynamodb").ScanCommandOutput>;
    /**
     * @param {import('@aws-sdk/lib-dynamodb').QueryCommandInput} input
     * @returns {Promise<import('@aws-sdk/lib-dynamodb').QueryCommandOutput>} The result of the query operation
     */
    query(input: import("@aws-sdk/lib-dynamodb").QueryCommandInput): Promise<import("@aws-sdk/lib-dynamodb").QueryCommandOutput>;
    /**
     * @param {import('@aws-sdk/lib-dynamodb').GetCommandInput} input
     * @returns {Promise<import('@aws-sdk/lib-dynamodb').GetCommandOutput>} The result of the get operation
     */
    get(input: import("@aws-sdk/lib-dynamodb").GetCommandInput): Promise<import("@aws-sdk/lib-dynamodb").GetCommandOutput>;
    /**
     * @param {import('@aws-sdk/lib-dynamodb').PutCommandInput} input
     * @returns {Promise<import('@aws-sdk/lib-dynamodb').PutCommandOutput>} The result of the put operation
     */
    put(input: import("@aws-sdk/lib-dynamodb").PutCommandInput): Promise<import("@aws-sdk/lib-dynamodb").PutCommandOutput>;
    /**
     * @param {import('@aws-sdk/lib-dynamodb').UpdateCommandInput} input
     * @returns {Promise<import('@aws-sdk/lib-dynamodb').UpdateCommandOutput>} The result of the update operation
     */
    update(input: import("@aws-sdk/lib-dynamodb").UpdateCommandInput): Promise<import("@aws-sdk/lib-dynamodb").UpdateCommandOutput>;
    /**
     * @param {import('@aws-sdk/lib-dynamodb').DeleteCommandInput} input
     * @returns {Promise<import('@aws-sdk/lib-dynamodb').DeleteCommandOutput>} The result of the delete operation
     */
    delete(input: import("@aws-sdk/lib-dynamodb").DeleteCommandInput): Promise<import("@aws-sdk/lib-dynamodb").DeleteCommandOutput>;
    #private;
}
export {};
//# sourceMappingURL=index.d.ts.map