using System;
using Application.Activities.Command;
using Application.Activities.DTO;
using FluentValidation;

namespace Application.Activities.Validators;

public class createActivityValidator:BaseActivityValidator<CreateActivity.Command,CreateActivityDTO>
{
    public createActivityValidator():base(x=>x.ActivityDto)
    {
       

    }
}
