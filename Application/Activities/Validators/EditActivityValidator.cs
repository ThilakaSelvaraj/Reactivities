using System;
using Application.Activities.Command;
using Application.Activities.DTO;
using FluentValidation;

namespace Application.Activities.Validators;

public class EditActivityValidator:BaseActivityValidator<EditActivity.Command,EditActivityDTO>
{
    public EditActivityValidator():base(x=>x.ActivityDTO)
    {
        RuleFor(x => x.ActivityDTO).NotEmpty().WithMessage("Id is required");
    }
}
