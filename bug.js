```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This will cause an error because the request body is not parsed
  console.log(req.body);
  res.status(200).json({ name: 'John Doe' });
}
```