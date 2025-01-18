```javascript
// pages/api/hello.js
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Parse the request body
  const { name, email } = req.body;

  // Now req.body is correctly parsed
  console.log(name, email); 

  res.status(200).json({ name: name, email: email });
}
```