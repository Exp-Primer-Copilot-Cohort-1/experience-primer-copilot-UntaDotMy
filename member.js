function skills(member){
    var skills = member.skills;
    var skillList = "";
    for(var i = 0; i < skills.length; i++){
        skillList += skills[i] + ", ";
    }
    return skillList;
}