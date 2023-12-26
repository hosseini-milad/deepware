import { normalPriceCount } from "../../env"
import errortrans from "../../translate/error"

function DashBoardDaily(props){
  const report = props.report
    return(
        <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                        <i className="fas fa-bullhorn"></i>
                    </div>
                    <div className={`${props.direction==="ltr"?"text-end":"text-start"} pt-1`}>
                        <p className="text-sm mb-0 text-capitalize">{errortrans.todayRequest[props.lang]}</p>
                        <h4 className="mb-0">{report?normalPriceCount(report.totalRequest):''}</h4>
                    </div>
                    </div>
                    <hr className="dark horizontal my-0"/>
                    <div className="card-footer p-3">
                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>
                    {errortrans.thanyesterday[props.lang]}</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
              <i className="fas fa-user"></i>
              </div>
              <div className={`${props.direction==="ltr"?"text-end":"text-start"} pt-1`}>
                <p className="text-sm mb-0 text-capitalize">{errortrans.todayClient[props.lang]}</p>
                <h4 className="mb-0">{report?normalPriceCount(report.totalUser):''}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>
              {errortrans.thanyesterday[props.lang]}</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <i className="fas fa-user-plus"></i>
              </div>
              <div className={`${props.direction==="ltr"?"text-end":"text-start"} pt-1`}>
                <p className="text-sm mb-0 text-capitalize">{errortrans.newClient[props.lang]}</p>
                <h4 className="mb-0">{report?normalPriceCount(report.totalNewClient):''}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">-2% </span>
              {errortrans.thanyesterday[props.lang]}</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-warning shadow-warning text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div className={`${props.direction==="ltr"?"text-end":"text-start"} pt-1`}>
                <p className="text-sm mb-0 text-capitalize">{errortrans.todayAttack[props.lang]}</p>
                <h4 className="mb-0">{report?normalPriceCount(report.totalAttack):''}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+5% </span>
                {errortrans.thanyesterday[props.lang]}</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DashBoardDaily