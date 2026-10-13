import '../v2/gw.css'
import GWNav from '@/components/gw/GWNav'
import GWFooter from '@/components/gw/GWFooter'
import GWReveal from '@/components/gw/GWReveal'

export const metadata = {
  metadataBase: new URL('https://cindybaez.com'),
}

export default function ClassLayout({ children }) {
  return (
    <div className="gw">
      <GWReveal />
      <GWNav onDark />
      {children}
      <GWFooter />
    </div>
  )
}
