import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

// Controllers are in charge of handling incoming requests and returning responses to the client.
@Controller( 'report/:reportType' )
export class AppController {

  @Get()
  getAllReports() {
    return [{ "report": "This will return all income report" }];
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