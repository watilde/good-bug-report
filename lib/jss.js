import { create } from 'jss'
import reactJss from 'react-jss'
import vendorPrefixer from 'jss-vendor-prefixer'
let jss = create()
jss.use(vendorPrefixer)
let useSheet = reactJss(jss)
export { useSheet }
