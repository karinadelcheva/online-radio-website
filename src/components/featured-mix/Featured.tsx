import React from 'react'

// we’ll code this as static data to start off with
// and then replace it later on with dynamic data
const FeaturedMix = (props: any) => (
  <div className="w-50-l vh-100 flex items-center justify-center cover bg-center bg-featured pad-bottom fixed-l left-0">
    <div className="w-100 tc pa3">
        <p className="b biryani f6 white ttu">Featured mix</p>
        <h1 className="mix-title mt0 mb2  white ttu">Mint Condition w/ Hotthobo - 27th November 2017</h1>
        {/* PlayButton */}
    </div>
  </div>
)

// export the component so we can use it in our `App.js` file.
export default FeaturedMix;