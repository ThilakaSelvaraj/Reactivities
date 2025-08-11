using System;
using Application.Activities.Command;
using Application.Activities.DTO;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet]

    public async Task<ActionResult<List<Activity>>> getActivities()
    {
        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> getActivityDetail(string id)
    {
        // throw new Exception("Server test error");
        
        return HandleResult(await Mediator.Send(new GetActivityDetails.Query { Id = id }));
    }

    [HttpPost]
    public async Task<ActionResult<string>> createActivity(CreateActivityDTO activityDto)
    {
        return HandleResult(await Mediator.Send(new CreateActivity.Command { ActivityDto = activityDto }));
    }

    [HttpPut]
    public async Task<ActionResult> EditActivity(EditActivityDTO activityDto)
    {
       return HandleResult( await Mediator.Send(new EditActivity.Command { ActivityDTO = activityDto }));

    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
       return HandleResult( await Mediator.Send(new DeleteActivity.Command { Id = id }));
    }
}
