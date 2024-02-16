import { Controller, Delete, Get, Param, Post, Put, Body } from "@nestjs/common";
import { data, ReportType, Data, SingleReport } from './data';

// Helper function, need to decide where to put.
const findReportByCategory = ( data: Data, reportType: ReportType ) => {
  return data.report.filter( ( report ) => report.typeOfReport === reportType );
};
const findReportByCategoryAndId = ( data: Data, reportType: ReportType, id: string ) => {
  return findReportByCategory( data, reportType ).find( report => report.id === id );
};
// Controllers are in charge of handling incoming requests and returning responses to the client.
@Controller( 'report/:reportType' )
export class AppController {

  @Get()
  getAllReports( @Param( 'reportType' ) reportType: ReportType ): Data {
    console.log( reportType );
    const allReportsOfSpecificType = findReportByCategory( data, reportType );
    return { report: allReportsOfSpecificType };
  }

  @Get( '/:id' )
  getReportById( @Param( 'reportType' ) reportType: ReportType, @Param( 'id' ) id: string ): { report: SingleReport; } {
    const singleReportByIdAndType = findReportByCategoryAndId( data, reportType, id );

    return { report: singleReportByIdAndType };
  }

  @Post()
  createReport() {
    return { "report": "This will create a new income report" };
  };

  @Put( '/:id' )
  updateReport() {
    return { "report": "This will update income report by id" };
  }

  @Delete( '/:id' )
  deleteReport() {
    return { "report": "This will delete all income report" };
  }
}

function Pram( target: AppController, propertyKey: "getAllReports", parameterIndex: 0 ): void {
  throw new Error( "Function not implemented." );
}
