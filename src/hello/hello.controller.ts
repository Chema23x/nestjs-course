import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { HelloGuard } from './guards/hello.guard';

@Controller()
export class HelloController {

    @Get("/")
    index(@Req() request: Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({
            message: "Hello World"
        })
    }

    @Get("new")
    @HttpCode(201)
    newMethod(){
        return "created"
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num : number){
        return num + 14;
    }

    @Get('active/:status')
    isActive(@Param('status', ParseBoolPipe) status: Boolean){
        console.log(typeof status)
        return status;
    }

    @Get('greet')
    @UseGuards(HelloGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}){
        return `Hello ${query.name} your age is ${query.age}`
    }
}
