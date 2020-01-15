# Change Log

## "version": "4.0.7"
Persists client in the constructor so you can access `openIdClient` without having to call `buildConsentUrl()`
> https://github.com/XeroAPI/xero-node/issues/317

Needed to pass in the check object which compares the initial params with what is coming back from callback
> fixes https://github.com/XeroAPI/xero-node/issues/304
```javascript
async setAccessTokenFromRedirectUri(url: string) {
	const params = this.openIdClient.callbackParams(url)
	const check = {...params}
	this.tokenSet = await this.openIdClient.callback(this.config.redirectUris[0], params, check);
	this.setAccessTokenForAllApis();

	await this.fetchConnectedTenantIds();
}
```

Leverages openId's callbackParam fn() to simplify K,V object creation
`const params = this.openIdClient.callbackParams(url)`