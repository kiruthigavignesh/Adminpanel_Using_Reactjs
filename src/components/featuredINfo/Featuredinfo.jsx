import "./featuredinfo.css";
import ArrowDownwardIcon  from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Featuredinfo(){
    return(
        <div className="featured">
            <div className="featureditem">
                <span className="featuredtitle">
Revanue
                </span>

                <div className="featuremoneycontainer">
                    <span className="featuredMoney"> $2,435</span>
              
                    <span className="featuredMoneyrate"> -11.4 <ArrowDownwardIcon className="featuredicon negative"/></span>

                </div>

                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">
Revanue
                </span>

                <div className="featuremoneycontainer">
                    <span className="featuredMoney"> $2,435</span>
              
                    <span className="featuredMoneyrate"> -11.4 <ArrowUpwardIcon className="featuredicon "/></span>

                </div>

                <span className="featuredsub">Compared to last month</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">
Revanue
                </span>

                <div className="featuremoneycontainer">
                    <span className="featuredMoney"> $2,435</span>
              
                    <span className="featuredMoneyrate"> -11.4 <ArrowDownwardIcon className="featuredicon negative"/></span>

                </div>

                <span className="featuredsub">Compared to last month</span>
            </div>
        </div>
    )
}