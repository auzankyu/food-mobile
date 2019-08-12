import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer _IExwaBOpwKKpT7ZtxZrpOt8EVZht5xMNfzGs2SWBHdLYVUqHWxe3i9yxyt205Djveo88RMTi1fzXABVGgEWl-mqc-SsCuNEFlxJVy7E97WBMngnXIRkVa7UDy9QXXYx'
  }
});