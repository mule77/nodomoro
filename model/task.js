function createTask(params){

    var validateParams = function(){
        if (params.userId === undefined || 
            params.dateTime === undefined ||
            params.uniqueIdGenerator === undefined){
            throw "Inavlid params";
        }
    }

    var _creationTimeStamp = 0;
    var _id = 0;
    var _description = params.description ? params.description : "";
    var _userId = "";

    var setUserId = function() {
        _userId = params.userId;
    }
    
    var setCreationTimeStamp = function(){
        _creationTimeStamp =  params.dateTime.now();
    }

    var setUniqueId = function(){
        _id =  params.uniqueIdGenerator.getId();
    }
    
    var wasBorn =  function(){
        return _creationTimeStamp;
    }

    var init = function(){
        validateParams();
        setUniqueId();
        setUserId();
        setCreationTimeStamp();
    }

    var getDto = function(){
        var dto = {
            id: _id,
            userId: _userId,
            creationTimestamp : _creationTimeStamp,
            description : _description
        };
        return dto;
            
    }
    
    
    
    var task = {};
    init();
    task.wasBorn = wasBorn;
    task.getDto = getDto;
    return task;
}

exports.create = createTask;