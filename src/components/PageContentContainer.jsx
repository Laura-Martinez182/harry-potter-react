import { Height } from "@mui/icons-material";
import DataTable from "./DataTable";

const PageContentContainer = ({pageName,rows,columns,onRowClicked}) => {
    return(
    <div className="PageContentContainer">
        <div className="TableTitleContainer"><h2>{pageName}</h2> </div>
        <div className="TableContainer"><DataTable rows={rows} columns={columns} rowClicked={onRowClicked}></DataTable></div>                      
    </div>)
}

export default PageContentContainer;


