//生成右边表头
function creatDlHead(topic){
    
    var stageSuffix="";
    var hyphen='_';
    var showTitle="";
    var isStageHid=topic.topicType;
    var arrType = ['普通课','复习课','阶段检查课','实践考试课'];
    stageSuffix = '_'+arrType[isStageHid];

    showTitle = topic.topicNum+hyphen+topic.topicName+stageSuffix+hyphen+topic.classMinute;
    var htmlMiddle =
            '<dl class="dl">'
            +'  <dt class="dl-tit dl-tit2" title="'+showTitle+'">'
            +'   <h6>'
            +'    <strong name="topicNumDt">'+topic.topicNum+'</strong>'
            +'    <a href="#" class="no-hover pull-right" data-toggle="dropdown"><i class="icon-angle-down icon-on-right bigger-110"></i></a>'
            +'                      <div class="dropdown-menu pull-right dropdown-caret">'
            +'                           <a href="#" title="编辑" class="edit"><i class="icon-pencil bigger-110 blue"></i></a>'
            +'                           <a href="#" title="删除" class="delete" data-dismiss="alert"><i class="icon-remove bigger-110 red"></i></a>'
            +'                           <a href="#" title="向左" class="left"><i class="icon-on-right icon-arrow-left bigger-110 green"></i></a>'
            +'                           <a href="#" title="向右" class="right"><i class="icon-on-right icon-arrow-right bigger-110 green "></i></a>'
            +'                      </div>'
            +'   </h6>'
            +'  </dt>'
            +'</dl>'
        ;
   $('#dlHeadData').append($(htmlMiddle));
     
}