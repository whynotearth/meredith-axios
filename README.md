## Usage

```
yarn install  
yarn build
```

Then in your project:  
```
yarn add whynotearth/meredith-axios#v1.0.0
```

```
// init file
import { ajax } from './ajax.js';
import { serviceOptions } from '@whynotearth/meredith-axios';
serviceOptions.axios = ajax;
```

```
// store module
import { PageService } from '@whynotearth/meredith-axios'
```

```
// ajax.js
import axios from 'axios';
const ajax = axios.create({
  baseURL: BASE_API,
  timeout: 20000,
  // withCredentials should be here and moving it to default headers wont work
  withCredentials: true
});
```