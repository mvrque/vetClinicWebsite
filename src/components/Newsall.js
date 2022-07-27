import React from 'react'
import graph from 'fb-react-sdk';
graph.api('/113124472034820', function(response) {
  console.log(response);
});
var searchOptions = {
    q:     "brogramming"
  , type:  "post"
};
 
graph.search(searchOptions, function(err, res) {
  console.log(res); // {data: [{id: xxx, from: ...}, {id: xxx, from: ...}]}
});

function Newsall() {
  return (
    <div>
        <h1>adad</h1>
    </div>
  )
}

export default Newsall