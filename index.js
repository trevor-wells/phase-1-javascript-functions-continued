function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = `go to the office`) {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (var1 = `*`) {
    return function (var2 = `special`) {
        return `You are ${var1}${var2}${var1}!`;
    }
}