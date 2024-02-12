import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { data, ReportType, Data } from './data';
// Controllers are in charge of handling incoming requests and returning responses to the client.
@Controller( 'report/:reportType' )
export class AppController {

  @Get()
  getAllReports( @Param( 'reportType' ) reportType: ReportType ): Data {
    console.log( reportType );
    return { report: data.report.filter( ( report ) => report.typeOfReport === reportType ) };
  }

  @Get( '/:id' )
  getReportById() {
    return { "report": "This will return income report by id" };
  }

  @Post()
  createReport() {
    return { "report": "This will create a new income report" };
  }

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
