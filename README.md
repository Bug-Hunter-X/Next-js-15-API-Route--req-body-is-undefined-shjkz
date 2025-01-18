# Next.js 15 API Route: req.body undefined

This repository demonstrates a common yet easily missed error in Next.js 15 API routes where `req.body` remains undefined, preventing proper parsing of incoming request data. The issue stems from missing middleware or incorrect configuration of body parsing. 

## Bug
The `bug.js` file shows the error scenario, where `console.log(req.body)` returns `undefined` because the request body isn't parsed. 

## Solution
The `bugSolution.js` file provides the solution, showcasing the correct way to parse the request body using the built-in `NextApiRequest` object's methods. This ensures that `req.body` contains the expected data.