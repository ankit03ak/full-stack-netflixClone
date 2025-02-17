import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import "./featuredInfo.css"

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,453</span>
            <span className="featuredMoneyRate">
                +12.5 <ArrowUpward className='featuredIcon'/>
            </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,453</span>
            <span className="featuredMoneyRate">
                -12.5 <ArrowDownward className='featuredIcon negative'/>
            </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$1,453</span>
            <span className="featuredMoneyRate">
                -12.5 <ArrowDownward className='featuredIcon negative'/>
            </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  )
}

export default FeaturedInfo
