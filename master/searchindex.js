Search.setIndex({docnames:["concepts","contrib/engines","contrib/handlers","contrib/metrics","engine","examples","exceptions","faq","handlers","index","metrics","quickstart","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["concepts.rst","contrib/engines.rst","contrib/handlers.rst","contrib/metrics.rst","engine.rst","examples.rst","exceptions.rst","faq.rst","handlers.rst","index.rst","metrics.rst","quickstart.rst","utils.rst"],objects:{"":{ignite:[9,0,0,"-"]},"ignite.contrib":{metrics:[3,0,0,"-"]},"ignite.contrib.engines":{common:[1,0,0,"-"],tbptt:[1,0,0,"-"]},"ignite.contrib.engines.common":{add_early_stopping_by_val_score:[1,1,1,""],save_best_model_by_val_score:[1,1,1,""],setup_common_distrib_training_handlers:[1,1,1,""],setup_common_training_handlers:[1,1,1,""],setup_mlflow_logging:[1,1,1,""],setup_plx_logging:[1,1,1,""],setup_tb_logging:[1,1,1,""],setup_visdom_logging:[1,1,1,""]},"ignite.contrib.engines.tbptt":{Tbptt_Events:[1,2,1,""],create_supervised_tbptt_trainer:[1,1,1,""]},"ignite.contrib.handlers":{custom_events:[2,0,0,"-"],lr_finder:[2,0,0,"-"],mlflow_logger:[2,0,0,"-"],neptune_logger:[2,0,0,"-"],param_scheduler:[2,0,0,"-"],polyaxon_logger:[2,0,0,"-"],tensorboard_logger:[2,0,0,"-"],time_profilers:[2,0,0,"-"],tqdm_logger:[2,0,0,"-"],visdom_logger:[2,0,0,"-"]},"ignite.contrib.handlers.custom_events":{CustomPeriodicEvent:[2,2,1,""]},"ignite.contrib.handlers.mlflow_logger":{MLflowLogger:[2,2,1,""],OptimizerParamsHandler:[2,2,1,""],OutputHandler:[2,2,1,""],global_step_from_engine:[2,1,1,""]},"ignite.contrib.handlers.mlflow_logger.MLflowLogger":{attach:[2,3,1,""]},"ignite.contrib.handlers.neptune_logger":{GradsScalarHandler:[2,2,1,""],NeptuneLogger:[2,2,1,""],NeptuneSaver:[2,2,1,""],OptimizerParamsHandler:[2,2,1,""],OutputHandler:[2,2,1,""],WeightsScalarHandler:[2,2,1,""],global_step_from_engine:[2,1,1,""]},"ignite.contrib.handlers.neptune_logger.NeptuneLogger":{attach:[2,3,1,""]},"ignite.contrib.handlers.param_scheduler":{ConcatScheduler:[2,2,1,""],CosineAnnealingScheduler:[2,2,1,""],CyclicalScheduler:[2,2,1,""],LRScheduler:[2,2,1,""],LinearCyclicalScheduler:[2,2,1,""],ParamGroupScheduler:[2,2,1,""],ParamScheduler:[2,2,1,""],PiecewiseLinear:[2,2,1,""],create_lr_scheduler_with_warmup:[2,1,1,""]},"ignite.contrib.handlers.param_scheduler.ConcatScheduler":{get_param:[2,3,1,""],load_state_dict:[2,3,1,""],simulate_values:[2,4,1,""],state_dict:[2,3,1,""]},"ignite.contrib.handlers.param_scheduler.CosineAnnealingScheduler":{get_param:[2,3,1,""]},"ignite.contrib.handlers.param_scheduler.LRScheduler":{get_param:[2,3,1,""],simulate_values:[2,4,1,""]},"ignite.contrib.handlers.param_scheduler.LinearCyclicalScheduler":{get_param:[2,3,1,""]},"ignite.contrib.handlers.param_scheduler.ParamGroupScheduler":{load_state_dict:[2,3,1,""],state_dict:[2,3,1,""]},"ignite.contrib.handlers.param_scheduler.ParamScheduler":{get_param:[2,3,1,""],load_state_dict:[2,3,1,""],plot_values:[2,4,1,""],simulate_values:[2,4,1,""],state_dict:[2,3,1,""]},"ignite.contrib.handlers.param_scheduler.PiecewiseLinear":{get_param:[2,3,1,""]},"ignite.contrib.handlers.polyaxon_logger":{OptimizerParamsHandler:[2,2,1,""],OutputHandler:[2,2,1,""],PolyaxonLogger:[2,2,1,""],global_step_from_engine:[2,1,1,""]},"ignite.contrib.handlers.polyaxon_logger.PolyaxonLogger":{attach:[2,3,1,""]},"ignite.contrib.handlers.tensorboard_logger":{GradsHistHandler:[2,2,1,""],GradsScalarHandler:[2,2,1,""],OptimizerParamsHandler:[2,2,1,""],OutputHandler:[2,2,1,""],TensorboardLogger:[2,2,1,""],WeightsHistHandler:[2,2,1,""],WeightsScalarHandler:[2,2,1,""],global_step_from_engine:[2,1,1,""]},"ignite.contrib.handlers.tensorboard_logger.TensorboardLogger":{attach:[2,3,1,""]},"ignite.contrib.handlers.time_profilers":{BasicTimeProfiler:[2,2,1,""]},"ignite.contrib.handlers.time_profilers.BasicTimeProfiler":{get_results:[2,3,1,""],print_results:[2,5,1,""],write_results:[2,3,1,""]},"ignite.contrib.handlers.tqdm_logger":{ProgressBar:[2,2,1,""]},"ignite.contrib.handlers.tqdm_logger.ProgressBar":{attach:[2,3,1,""],log_message:[2,3,1,""]},"ignite.contrib.handlers.visdom_logger":{GradsScalarHandler:[2,2,1,""],OptimizerParamsHandler:[2,2,1,""],OutputHandler:[2,2,1,""],VisdomLogger:[2,2,1,""],WeightsScalarHandler:[2,2,1,""],global_step_from_engine:[2,1,1,""]},"ignite.contrib.handlers.visdom_logger.GradsScalarHandler":{add_scalar:[2,3,1,""]},"ignite.contrib.handlers.visdom_logger.OptimizerParamsHandler":{add_scalar:[2,3,1,""]},"ignite.contrib.handlers.visdom_logger.OutputHandler":{add_scalar:[2,3,1,""]},"ignite.contrib.handlers.visdom_logger.VisdomLogger":{attach:[2,3,1,""]},"ignite.contrib.handlers.visdom_logger.WeightsScalarHandler":{add_scalar:[2,3,1,""]},"ignite.contrib.metrics":{AveragePrecision:[3,2,1,""],GpuInfo:[3,2,1,""],PrecisionRecallCurve:[3,2,1,""],ROC_AUC:[3,2,1,""],RocCurve:[3,2,1,""]},"ignite.contrib.metrics.GpuInfo":{attach:[3,3,1,""],compute:[3,3,1,""],reset:[3,3,1,""],update:[3,3,1,""]},"ignite.contrib.metrics.regression":{CanberraMetric:[3,2,1,""],FractionalAbsoluteError:[3,2,1,""],FractionalBias:[3,2,1,""],GeometricMeanAbsoluteError:[3,2,1,""],GeometricMeanRelativeAbsoluteError:[3,2,1,""],ManhattanDistance:[3,2,1,""],MaximumAbsoluteError:[3,2,1,""],MeanAbsoluteRelativeError:[3,2,1,""],MeanError:[3,2,1,""],MeanNormalizedBias:[3,2,1,""],MedianAbsoluteError:[3,2,1,""],MedianAbsolutePercentageError:[3,2,1,""],MedianRelativeAbsoluteError:[3,2,1,""],R2Score:[3,2,1,""],WaveHedgesDistance:[3,2,1,""]},"ignite.engine":{CallableEventWithFilter:[4,2,1,""],Engine:[4,2,1,""],EventEnum:[4,2,1,""],Events:[4,2,1,""],State:[4,2,1,""],create_supervised_evaluator:[4,1,1,""],create_supervised_trainer:[4,1,1,""]},"ignite.engine.CallableEventWithFilter":{name:[4,6,1,""],value:[4,6,1,""]},"ignite.engine.Engine":{add_event_handler:[4,3,1,""],fire_event:[4,3,1,""],has_event_handler:[4,3,1,""],last_event_name:[4,6,1,""],load_state_dict:[4,3,1,""],on:[4,3,1,""],register_events:[4,3,1,""],remove_event_handler:[4,3,1,""],run:[4,3,1,""],state:[4,6,1,""],state_dict:[4,3,1,""],terminate:[4,3,1,""],terminate_epoch:[4,3,1,""]},"ignite.engine.Events":{COMPLETED:[4,6,1,""],EPOCH_COMPLETED:[4,6,1,""],EPOCH_STARTED:[4,6,1,""],EXCEPTION_RAISED:[4,6,1,""],GET_BATCH_COMPLETED:[4,6,1,""],GET_BATCH_STARTED:[4,6,1,""],ITERATION_COMPLETED:[4,6,1,""],ITERATION_STARTED:[4,6,1,""],STARTED:[4,6,1,""]},"ignite.engine.engine":{RemovableEventHandle:[4,2,1,""]},"ignite.engine.engine.RemovableEventHandle":{remove:[4,3,1,""]},"ignite.exceptions":{NotComputableError:[6,2,1,""]},"ignite.handlers":{Checkpoint:[8,2,1,""],DiskSaver:[8,2,1,""],EarlyStopping:[8,2,1,""],ModelCheckpoint:[8,2,1,""],TerminateOnNan:[8,2,1,""],Timer:[8,2,1,""]},"ignite.handlers.Timer":{attach:[8,3,1,""],running:[8,6,1,""],step_count:[8,6,1,""],total:[8,6,1,""]},"ignite.metrics":{Accuracy:[10,2,1,""],Average:[10,2,1,""],ConfusionMatrix:[10,2,1,""],DiceCoefficient:[10,1,1,""],EpochMetric:[10,2,1,""],Fbeta:[10,1,1,""],GeometricAverage:[10,2,1,""],IoU:[10,1,1,""],Loss:[10,2,1,""],MeanAbsoluteError:[10,2,1,""],MeanPairwiseDistance:[10,2,1,""],MeanSquaredError:[10,2,1,""],Metric:[10,2,1,""],MetricsLambda:[10,2,1,""],Precision:[10,2,1,""],Recall:[10,2,1,""],RootMeanSquaredError:[10,2,1,""],RunningAverage:[10,2,1,""],TopKCategoricalAccuracy:[10,2,1,""],VariableAccumulation:[10,2,1,""],mIoU:[10,1,1,""]},"ignite.metrics.Metric":{attach:[10,3,1,""],compute:[10,3,1,""],detach:[10,3,1,""],is_attached:[10,3,1,""],reset:[10,3,1,""],update:[10,3,1,""]},"ignite.utils":{apply_to_tensor:[12,1,1,""],apply_to_type:[12,1,1,""],convert_tensor:[12,1,1,""],one_rank_only:[12,1,1,""],setup_logger:[12,1,1,""],to_onehot:[12,1,1,""]},ignite:{engine:[4,0,0,"-"],utils:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","classmethod","Python class method"],"5":["py","staticmethod","Python static method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:classmethod","5":"py:staticmethod","6":"py:attribute"},terms:{"10th":[2,4],"20th":2,"21st":2,"30th":2,"50th":4,"9754010029137135e":2,"abstract":[0,2,11],"boolean":[4,10],"break":[0,11],"byte":12,"case":[0,1,4,7,8,10,11],"class":[0,1,2,3,4,6,7,8,10],"default":[0,1,2,3,4,8,10,12],"enum":[4,7],"final":[8,10,11],"float":[2,8,10],"function":[0,1,2,3,4,7,8,10,11,12],"import":[0,2,4,7,8,10,11,12],"int":[1,2,4,8,10,12],"long":[1,10],"new":[2,4,10,12],"public":10,"return":[0,1,2,3,4,7,8,10,11,12],"static":2,"super":10,"true":[0,1,2,3,4,8,10],"try":0,"while":[0,1,2],And:[10,11],For:[0,1,2,4,7,8,10,11,12],NOT:4,The:[0,2,4,8,10,11],Then:2,There:[7,8],These:10,Using:8,__class__:2,__init__:10,__name__:2,__version__:2,_as_first_start:2,_can_:10,_complet:2,_infer:11,_lrschedul:[1,2],_metrics_transform:11,_neg_val_loss:8,_num_correct:10,_num_exampl:10,_output_transform:11,_prepare_batch:[1,4,11],_start:2,_updat:11,a_j:3,abc:[4,12],abov:[0,8,10,11],absolut:[2,3,10],acc:0,acc_metr:10,accept:[2,4,11],access:[2,4],accord:[8,10],accumul:[3,9,10,11],accumulation_step:7,accuraci:[0,2,4,8,10,11],achiev:2,across:10,action:8,activ:3,activated_output_transform:3,actual:[3,4,8,10],adapt:10,add:[0,1,4,7,11],add_early_stopping_by_val_scor:1,add_event_handl:[0,2,4,7,8,11],add_scalar:2,added:[2,4,10,11],adding:[2,9,11],addit:[0,1,2,4,9,11],adit:1,adjust:2,advanc:2,after:[0,2,4,8,10,11],again:4,aggreg:[2,10,11],all:[0,2,3,4,8,10],all_reduc:10,allow:[4,7,11],alpha:10,alreadi:[2,4,8,10],also:[0,1,2,10,11],alwai:4,among:[4,7],ani:[0,2,3,4,8,10,12],anneal:2,anonym:2,anoth:[0,2,7,8,10,11],another_engin:2,another_loss:2,answer:7,apex:5,api:2,api_token:2,appendix:3,appli:[1,2,3,4,10,12],applic:2,apply_to_tensor:12,apply_to_typ:12,archiv:8,area:3,arg:[0,2,4,10,11],argmax:10,argument:[0,1,2,4,8,10,11],arithmet:9,arrai:2,articl:7,asctim:12,ask:7,assert:[3,10],assign:4,associ:[1,4],assum:[2,10],asynchron:[1,4],atom:8,attach:[0,1,2,3,4,8,10,11],attribut:[0,4,8],auc:3,augment:0,auto:5,automat:[2,4,10],avail:[2,3,10],averag:[1,3,4,8,10],average_precision_scor:3,averageprecis:3,avg:[10,11],avg_output:10,avg_precis:3,avoid:[2,12],awesome_filenam:2,axi:[1,2],back:[2,7],backend:10,background:10,backprop:1,backpropag:9,backpropev:7,backward:[0,4,9,11],backward_complet:7,backward_start:7,bar:[1,2,3],bar_ev:4,bar_format:2,barrier:12,base:[1,2,3,4,8,9,10],baselin:5,basic:[4,5],basictimeprofil:2,batch:[0,1,2,3,4,7,8,10,11],batch_i:[1,4],batch_loss:4,batch_pr:4,batch_siz:[2,10],batch_x:[1,4],batchsiz:7,becom:4,been:[2,4,8],befor:[1,3,4,10],behaviour:[2,8],being:[4,10],below:[0,3,8,9,10],best:[1,2,7,8],best_model_10_val_acc:8,best_model_9_val_acc:8,best_model_sav:7,beta:10,between:[1,2,4,8,10],bia:3,binari:[3,10],binary_accuraci:10,blog:7,boilerpl:9,bool:[1,2,4,8,10,12],botchkarev:3,both:1,bound:[2,4],breez:9,bug:2,calcul:[3,7,10],call:[0,1,2,3,4,8,10],call_everi:4,call_on_special_ev:[0,4],call_onc:4,callabl:[1,2,3,4,8,10,12],callableeventwithfilt:4,callback:8,can:[0,1,2,3,4,7,8,9,10,11],canberra:3,canberrametr:3,cannot:[3,6,10],care:10,categor:10,cdot:3,chang:[2,4,8],characterist:3,chart:2,check:[4,8,10],checkpoint:[0,1,2,8,9],checkpoint_12345:8,checkpoint_50000:0,checkpoint_7000:8,checkpoint_8000:8,checkpoint_fil:0,chunk:1,cifar100:5,cifar10:[0,9],classif:[2,3,5],classifi:5,classmethod:2,client:2,close:2,closing_event_nam:2,cloud:8,cnn:2,code:[0,2,5,7,9,10],coeffici:[3,10],collect:[4,8,10,12],column:2,com:[2,9],combin:10,combined_schedul:2,common:[1,2,11],compact:[5,9],comparison:9,complet:[0,2,3,4,7,9,11,12],complex:9,compon:11,compos:8,compress:8,compris:3,comput:[0,1,2,3,4,6,7,8,11],computation:1,compute_engin:4,compute_fn:10,compute_mean_std:4,concat:2,concept:9,concis:9,concurr:2,conda:9,condit:10,confer:2,confid:3,configur:[0,1,2,4,5,12],confus:10,confusion_matrix:10,confusionmatrix:10,conjunct:10,consequ:7,consid:[0,8,10],consist:4,constructor:[8,10,11],contain:[0,2,3,4,8,10],context:[2,4],continu:0,contrib:[5,9],contribut:[1,2,3,10],control:8,convert:12,convert_tensor:12,convolut:5,copi:[1,2,4],core:4,correct:[2,4,7,10],correspond:[0,2,10],cosin:2,cosineannealinglr:2,could:[7,8,10,11],count:[4,8],counter:8,cours:2,cpe1:2,cpe2:2,cpu:[1,4],crash:0,creat:[0,1,2,4,8,9,11],create_dir:[0,8],create_engin:11,create_lr_scheduler_with_warmup:2,create_supervised_evalu:[0,2,4,10,11],create_supervised_tbptt_train:[0,1],create_supervised_train:[0,2,4,11],creation:2,criterion:[4,7],critic:12,csv:2,ct_co:12,cuda:[1,2,10],cumulative_delta:8,current:[0,2,3,4,8,10],curv:3,custom:[0,2,4,9],custom_ev:9,custom_event_filt:[0,4],custom_var:10,custom_var_mean:10,customaccuraci:10,customev:4,customperiodicev:[2,7],cycl:[2,5],cycle_mult:2,cycle_s:2,cyclegan:2,cyclic:2,cyclicalschedul:2,damag:8,data:[0,1,2,3,4,10,11,12],data_it:0,data_load:[0,4,8],dataflow:[2,4],dataflow_stat:2,dataload:[0,2,4,10,11],datapoint:0,dataset:[0,2,4,5,7,8,10,11],datatyp:10,dcgan:5,debug:[2,12],decai:10,decor:[0,4,10,11,12],decreas:2,dedic:1,def:[0,2,3,4,7,8,10,11],defin:[0,2,4,7,8,10,11],defind:4,definit:3,delay_start:2,depend:[4,9,10],deprec:[2,8],desc:2,descript:2,deseri:0,desir:[2,8],destin:8,detach:[0,10],detail:[0,2,3,4,7,8,10,11],determin:[3,10],devic:[1,2,3,4,7,10,11,12],device_id:10,diagon:10,dice:10,dicecoeffici:10,dict:[1,2,4,8],dictionari:[0,1,2,3,4,8,10],differ:[0,2,3,10],dim:[1,3,4,10],dimens:[1,10],directli:2,directori:[1,2,8],dirnam:8,disk:8,disksav:[0,8],displai:[0,2,5],distanc:[3,10],distribut:[0,1,9,12],distributed_rank:12,distributeddataparallel:10,distributedsampl:[1,10],divid:8,do_something_once_on_25_epoch:0,doc:[0,2,10],doe:[2,10],doesnt:8,done:[0,2,4,10,11],door:4,down:2,download:2,dtype:4,due:2,durat:2,dure:[2,3,4,8,10,11],dynam:4,each:[0,1,2,3,4,9,10],earli:[1,7,9],earlystop:[7,8],easi:11,easili:[0,11],edit:2,effect:[0,1,4,7],efficientnet:[2,5],either:[2,3],elaps:[2,7,8],element:10,els:10,emit:4,empti:2,encod:5,encount:10,encourag:11,end:[0,2,3,4,10,11],end_valu:2,end_value_mult:2,engin:[2,3,8,9,10,11,12],entir:10,entri:2,enumer:4,environ:2,epoch:[0,1,2,3,4,8,9,10,11,12],epoch_bound:10,epoch_complet:[0,2,4,7,8,11],epoch_length:[0,4],epoch_start:[0,4,8],epochmetr:10,epochs_10:2,epochs_10_start:2,epochs_:2,eps:10,equal:[8,10,12],equival:[7,11],error:[3,4,10,12],essenc:0,essenti:11,estim:3,eta_min:2,etc:[0,7,8,12],eval:[4,11],evalu:[0,2,4,7,8,9,10,11,12],even:[4,11],event:[1,2,3,4,8,9,10,11],event_filt:[0,1,4],event_index:2,event_nam:[2,3,4,8],event_start:2,event_to_attr:4,eventenum:4,events_list:4,eventslist:4,everi:[0,1,2,4,8,10,11],exampl:[0,3,4,7,8,9,10,11,12],except:[0,8,9,10],exception_rais:4,exchang:4,execut:[0,2,4,8,11],execute_valid:4,exist:8,exp:3,expans:2,expect:[3,4,8,10],expens:[10,11],experi:[2,5],experiment_nam:2,explan:9,explor:2,exponentiallr:2,expos:8,ext:8,extra:10,facebookresearch:2,facilit:0,factor:10,factori:4,fae:3,fall:2,fals:[0,1,2,4,8,10,12],faq:9,fashion:[5,10],fast:5,favor:2,fbeta:10,featur:[5,9,10],fed:10,fetch:[0,1,2],few:[5,9],figsiz:2,figur:2,file:[2,8,11,12],filenam:8,filename_prefix:[2,8],filepath:12,fill:2,filter:[0,4,8,10,12],finetun:5,fire:[0,2,4,11],fire_ev:[0,4,7],first:[0,2,4,10,11],fit:4,flag:[2,8,10],flexibl:[0,4,7],float32:[3,10],float64:4,follow:[0,2,4,7,8,10,11],foo_ev:4,footnot:11,forget:8,form:[2,3,10],format:[0,2,4,10,11,12],forward:9,found:[0,2,3,4,7,11],frac:3,fraction:3,fractionalabsoluteerror:3,fractionalbia:3,framework:0,frequent:[2,7],from:[0,2,3,4,5,8,9,10,11,12],full:[5,9],fulli:10,func:12,function_before_backprop:7,further:8,furthermor:9,futur:2,gamma:2,gan:5,gather:10,gener:2,geometr:[3,10],geometricaverag:10,geometricmeanabsoluteerror:3,geometricmeanrelativeabsoluteerror:3,get:[0,1,2,8,9,10,11],get_batch_complet:4,get_batch_start:4,get_data_load:11,get_device_nam:2,get_event_attrib_valu:2,get_param:2,get_result:2,git:[2,9],github:[2,7,9],give:11,given:[0,2,4,8,10],glob:2,global:[2,4,8],global_step:[2,8],global_step_from_engin:[2,8],global_step_transform:[2,8],gmae:3,gmrae:3,goe:[2,4],good:0,gpu:[1,3,4,5,7,10],gpuinfo:[1,3],gradient:[1,2,9],grads_scalar_handl:2,gradshisthandl:2,gradsscalarhandl:2,ground:[3,10],group:[2,7,10],guarante:[2,8],guid:11,half:2,handl:4,handler:[1,4,7,9,11,12],happen:0,harmon:10,has:[0,1,4,8,9,10],has_event_handl:4,have:[2,3,4,7,8,10,11],hedg:3,help:[0,2,5,9,10],helper:[2,9,10,11,12],here:[0,2,4,7],high:9,higher:8,highest:8,histogram:2,histori:10,hold:10,hors:5,host:[1,4],hot:12,how:[0,2,5,9],howev:[0,1,10,11],html:2,http:[2,9],hyperparamet:5,ideal:4,idl:8,ieee:2,ignit:[0,5,7,11],ignor:10,ignore_index:10,ignored_class:10,illustr:10,imag:4,imagenet:5,img_mean2:4,img_mean:4,impact:2,implement:[3,7,8,10,11],improv:[0,1,8,12],in_training_loop_on_epoch_complet:7,includ:0,increas:[2,7,8,9],increment:8,indefinit:2,independ:2,index:[2,10],indic:[0,1,4,8,10,12],infer:4,infinit:8,info:12,inform:[0,2,3,11],inherit:10,initi:[0,2,3,10],initializ:0,input:[0,2,3,4,8,10,12],input_:12,input_typ:12,insert:7,insid:2,inspir:5,instal:[1,2],instanc:[2,10],instead:[2,8,9,10],integ:[2,8],integr:2,intend:0,intens:1,inter:10,interact:0,interest:[3,10,11],intern:[0,2,4,8,10],intersect:10,interv:1,introduc:0,invok:4,iou:10,iou_metr:10,iou_no_bg_metr:10,ipywidget:2,is_attach:[3,10],is_multilabel:10,issu:7,item:[0,4,7,10,11],iter:[0,1,2,3,4,8,9,11],iter_count:0,iteration_:2,iteration_complet:[0,2,3,4,8,10,11],iteration_start:[0,2,4,8],iterations_1000:2,iterations_1000_complet:2,iterations_:2,its:[0,2,4,8,9,10],jump:2,jupyt:2,just:[0,7,11],kei:[1,2,4,8],kept:[4,8],keyword:[2,4,10],known:1,kwarg:[0,1,2,4,10,11],kwd:2,l_bar:2,label:[2,7],lambda:[0,2,3,4,8,10],larg:11,larger:[2,3,10],last:[0,1,2,4,8,11],last_checkpoint:8,last_event_nam:4,later:2,latter:[4,10],launch:7,lead:[3,10],learn:[1,2,5],least:[8,10],left:3,legend:2,len:[0,2,4],length:[0,1,2,4],lesli:2,less:[2,8],let:[0,2,4,11],level:[9,12],levelnam:12,librari:[2,9],like:[0,2,3,9,10,11,12],limit:7,line2d:2,line:[2,5,9,11],linear:8,linearli:2,list:[0,1,2,3,4,9],listdir:8,load:[0,2,4,8],load_object:0,load_state_dict:[0,2,4,8],local:10,local_rank:10,log:[1,2,3,5,7,10,11,12],log_dir:2,log_every_it:1,log_fil:2,log_handl:[2,3],log_messag:2,log_metr:0,log_param:2,log_running_avg_metr:10,log_train:4,log_training_loss:11,log_training_loss_every_50_iter:0,log_training_result:11,log_validation_result:11,logger:[1,2,5,12],logic:[4,11],logit:10,look:[2,3,11,12],lookup:2,loop:[0,4,5,7,9,11],loss1:2,loss2:2,loss:[0,1,2,4,7,8,10,11],loss_fn:[0,1,4,7,10,11],lr_finder:9,lr_schedul:[0,1,2,8],lr_scheduler_1:2,lr_scheduler_2:2,lr_scheduler_3:2,lr_valu:2,lr_values_1:2,lr_values_2:2,lr_values_3:2,lr_values_4:2,lrschedul:1,lvert:3,mai:[1,2,4],main:[2,11],make:[2,4,8],manag:[2,4],manhattan:3,manhattandist:3,mani:1,manual:0,manual_se:10,map:[4,8,12],mare:3,mask:10,mathemat:3,matplotlib:2,matrix:10,max:[2,3,4],max_:3,max_epoch:[0,2,4,8,11,12],maxa:3,maximum:3,maximumabsoluteerror:3,mdae:3,mdape:3,mdrae:3,mean2:4,mean:[2,3,4,10],mean_custom_var:10,mean_iou_no_bg_metr:10,meanabsoluteerror:10,meanabsoluterelativeerror:3,meanerror:3,meannormalizedbia:3,meanpairwisedist:10,meansquarederror:10,measur:[3,8,11],median:3,medianabsoluteerror:3,medianabsolutepercentageerror:3,medianrelativeabsoluteerror:3,mem:3,member:4,memori:[3,10],messag:[0,2,12],metadata:2,method:[0,2,4,8,9,10,11,12],metric1:10,metric2:10,metric:[0,1,2,4,6,7,8,9,11],metric_nam:[1,2,3],metrics_lambda:10,metricslambda:10,middl:[0,2],might:7,mileston:2,milestones_valu:2,min:2,min_delta:8,minimum:8,minst:2,miou:10,mix:5,mlflow:[1,2,5],mlflow_logg:9,mlflow_tracking_uri:2,mlflowlogg:[1,2],mnb:3,mnist:[0,2,9,11],mode:2,model:[0,1,2,3,4,7,8,9,10,11],modelcheckpoint:[1,7,8],modul:[1,2,3,4,5,12],momentum:[2,11],more:[0,3,4,7,8,9,10,11],most:[7,10,11],move:[8,11,12],multi:[3,8,10],multiclass:10,multilabel:10,multilpl:5,multipl:[0,2,5,7,8,10],must:[2,3,10],mydata:0,mymetr:[3,10],mymodel:[7,8],myprefix:8,myprefix_mymodel_4:8,myprefix_mymodel_6:8,n_class:10,n_epoch:2,n_fmt:2,n_iter:2,n_save:[1,2,8],name:[1,2,3,4,8,10,11,12],namespac:2,nan:[2,8,10],nativ:[1,5],necessari:10,need:[0,2,4,7,8,10],neg_val_loss:8,neglect:10,neptun:2,neptune_logg:9,neptune_project:2,neptunelogg:2,neptuneml:2,neptunesav:2,neptuneserv:2,neputn:2,net:11,network:[2,5],neural:[2,5,9],new_attribut:0,newli:2,next:[0,2,11],nll:[2,8,11],nllloss:11,no_grad:[4,11],node:[5,10],non_block:[1,4,7,12],none:[1,2,3,4,8,10,11,12],norm:2,normal:[2,3,10],notcomputableerror:[3,6,10],note:[0,2,4,8,9,10,11],notebook:[2,9],now:[4,11],npt_logger:2,num_categori:10,num_class:[10,12],num_ev:2,num_exampl:10,num_work:[2,10],number:[0,1,2,4,7,8,10,12],numpi:2,nvidia:5,object:[1,2,4,8,10,12],observ:[10,11],obtain:10,occasion:9,occur:[0,1,4,8],offline_mod:2,older:8,on_every_1000_iter:2,on_every_10_epoch:2,on_iteration_complet:0,on_training_end:0,on_training_start:0,onc:[0,3,4,10],one:[1,2,3,4,7,8,10,11,12],one_rank_onli:12,onli:[2,4,7,8,10,11],onlin:[2,10,11],open:[2,4],oper:[2,3,10],opitm:7,opportun:1,optim:[0,1,2,4,7,8,11],optim_step_complet:7,optimizer_params_handl:2,optimizerparamshandl:2,option:[1,2,3,4,8,10,11,12],order:4,ordereddict:4,org:2,other:[0,1,4,7,8,9,10],otherwis:[2,8,10],our:11,out:10,output:[0,1,2,3,4,8,10,11,12],output_devic:10,output_nam:1,output_path:[1,2],output_simulated_valu:2,output_transform:[0,2,3,4,8,10],outputhandl:[2,3],over:[0,1,2,4,7,10,11],overrid:[4,10],own:[2,9],p_j:3,packag:[1,2,9],page:3,pair:[2,3],pairwis:10,paragraph:0,parallel:10,param:2,param_group:4,param_group_index:2,param_histori:2,param_nam:2,param_schedul:9,paramet:[0,1,3,4,8,9,10,11,12],paramgroupschedul:2,paramschedul:[1,2],part:11,partial:10,particip:10,pascal:5,pass:[1,2,3,4,8,9,10,11],password:2,path:[1,2,8,12],path_to_dir:2,pathnam:2,patienc:[1,7,8],pattern:[0,2,11],paus:8,pbar:2,percentag:[2,3],perform:[2,4],period:[2,8,10],persist:[2,3],phase:2,piecewiselinear:2,pin_memori:10,pip:[2,9],plateau:7,pleas:[0,2,8],plot:2,plot_valu:2,plt:2,plx_logger:2,point:4,polyaxon:[2,5],polyaxon_logg:9,polyaxonlogg:[1,2],port:[2,5],posit:[2,10],possibl:[2,8],post:2,postfix:2,potenti:[3,10],pow:10,practic:[0,7,10],pre:9,precis:[2,3,5,10],precision_recall_curv:3,precisionrecallcurv:3,predict:[2,3,10],predict_on_batch:4,prefetch:4,prefix:[1,8],prepar:2,prepare_batch:[0,1,4,7],preprocess:4,preprocess_batch:4,present:1,preserv:2,previou:0,previous:11,print:[0,2,4,8,10,11],print_epoch:4,print_loss:0,print_result:2,probabl:3,process:[0,1,2,3,4,8,10],process_batch:7,process_funct:[0,3,4,8,10],processing_stat:2,prod:10,produc:2,profil:2,progress:[1,2,3],progressbar:[2,3],project:[2,11],project_nam:2,propag:7,proper:2,properti:2,protocol:4,provid:[0,1,2,3,4,5,7,8,10],pth:8,pure:9,purpos:[2,10,11],pylab:2,pynvml:1,python:2,pytor1:2,pytorch:[2,5,9,10],qualifi:[2,8],quantiti:[3,10],question:7,quickstart:9,r2score:3,r_bar:2,rais:[3,4,6,8,10],ram:[3,10],rand:10,randint:10,random:[0,4],rang:8,rank:[10,12],rapidli:9,rate:[1,2],rate_fmt:2,ratio:2,read:2,readabl:[9,12],recal:[3,10],receiv:[1,3,4,8,10,11],recommend:2,recurr:1,recurs:[2,10],redefin:11,reduc:[2,7,10],reduct:2,refer:[0,3,5,9],regist:[0,4,8],register_ev:[0,2,4,7],regress:9,reinforc:5,reinit__is_reduc:10,rel:3,relev:12,remain:[0,2],remov:[4,8],removableeventhandl:[0,4],remove_event_handl:[0,4],render:2,repeat:[2,4],replac:[2,4,8],repres:[1,2,10],reproduc:[4,9],reproduciblebatchsampl:4,requir:[1,2,10,11],require_empti:8,requires_grad:2,res:10,reset:[3,4,8,10],reshap:4,resnet:5,resourc:7,respect:[1,3,4,10],restor:[0,4],restrict:[0,10],result:[0,2,4,10,11],resum:[4,8,9],retain:8,reus:0,review:11,right:3,roc:3,roc_auc:3,roc_auc_scor:3,roc_curv:3,roccurv:3,role:11,roll:9,root:10,rootmeansquarederror:10,round:10,rule:10,run:[0,1,2,3,4,7,8,10,11,12],running_avg_accuraci:10,running_avg_loss:10,runningaverag:[1,2,10],rvert:3,same:[1,3],sampl:[4,10],sampler:[1,4,10],save:[0,1,2,8],save_as_state_dict:8,save_best_model_by_val_scor:1,save_every_it:1,save_handl:8,save_histori:2,save_interv:8,scalar:[2,10],schedul:[0,1,9],scheduler1:2,scheduler2:2,scheduler_1:2,scheduler_2:2,scheduler_kwarg:2,schema:10,score:[1,8,10],score_funct:[2,7,8],score_nam:[2,8],search:4,second:[2,8,11],section:[2,7],see:[0,2,4,8,9,10],seed:[0,2,4],seen:10,select:2,self:[4,8,10],send:[2,4],sequenc:[1,10,12],serial:[0,8],server:2,set:[0,1,2,4,8,10,11],set_devic:10,set_epoch:1,setup:[2,4,8,9,12],setup_common_distrib_training_handl:1,setup_common_training_handl:1,setup_logg:12,setup_mlflow_log:1,setup_plx_log:1,setup_tb_log:1,setup_visdom_log:1,sever:[5,7,10,11],sgd:[2,11],shape:[3,4,10,12],share:2,shortcut:4,should:[1,2,4,8,10],show:[2,9,10],show_legend:2,shown:[3,10],side:9,sigmoid:3,signal:4,signatur:10,similar:0,similarli:0,simpl:[0,2,7,10],simpli:[0,2,11],simul:[0,2],simulate_valu:2,sinc:[0,2,4,8],singl:[0,1,2,4,5,7,8,10],situat:2,size:[2,10],skip:[0,2],sklearn:3,sleep:8,slow:2,small:5,smaller:1,smith17:2,smith:2,snippet:[10,11],softmax:3,some:[0,2,4,7,10],someth:[0,4,7,10],sourc:[0,1,2,3,4,6,8,9,10,11,12],specif:[1,4,8,10],specifi:[2,4,8,10],spent:2,sqrt:4,squar:[3,10],src:10,stabl:9,start:[0,1,2,3,4,7,8,9,10,11,12],start_valu:2,start_value_mult:2,stat:2,state:[1,2,3,4,7,8,9,10,11],state_dict:[0,2,4,8],statement:4,std:[2,4],stderr:2,stdout:2,step:[0,1,2,4,7,8,11],step_count:8,step_numb:8,step_schedul:2,step_siz:2,steplr:2,still:11,stop:[1,7,8,9],stopiter:0,storag:[0,8],store:[0,1,2,3,4,8,10],str:[1,2,3,4,8,10,12],string:[2,4],structur:8,style:[2,5],subclass:[1,2],subplot:2,subsequ:1,subset:11,suffix:8,suggest:[2,9],sum:[4,10],sum_:3,summarywrit:2,supervis:[0,1,4],support:[1,2,4,10],sure:2,switch_batch:4,sync_all_reduc:10,synchron:0,synchronis:12,system:0,t_co:4,t_max:2,tab:2,tag:[1,2,3],take:[2,4,8,10,11],taken:[2,10,12],target:[3,4,10],task:[0,3,5],tb_log:2,tb_logger:[2,3],tbptt:[1,7],tbptt_event:[1,4],tbptt_event_to_attr:4,tbtt_step:1,temporari:8,tensor:[1,2,3,4,8,10,12],tensorboard:[1,2,3,5],tensorboard_logg:9,tensorboardlogg:[1,2],tensorboardx:2,termin:4,terminate_epoch:4,terminateonnan:[1,8],test:0,test_dataset:10,test_load:[0,10],test_sampl:10,text:[3,5],than:[2,3,8,10],thei:[2,4,10],them:[0,2,4,7,8],therefor:[7,10,11],thi:[0,1,2,3,4,7,8,9,10,11],thing:[9,11],those:0,thread:2,threadpoolexecutor:2,three:10,threshold:[3,10],thresholded_output_transform:10,through:[1,2,10,11],throught:9,thu:[0,2,11],time:[0,2,7,8,9,12],time_iter:4,time_iteration_complet:4,time_iteration_start:4,time_profil:9,timer:8,titl:[0,2],tmp:[0,7,8],to_load:0,to_onehot:12,to_sav:[0,1,2,8],togeth:10,token:2,tolist:4,tom:2,too:[7,10],tool:1,top:10,topkcategoricalaccuraci:10,torch:[0,1,3,4,8,10,11,12],torch_lr_schedul:2,torchvis:5,total:[2,8],total_fmt:2,touch:4,tqdm:[2,3,5],tqdm_kwarg:2,tqdm_logger:9,tqdm_notebook:2,track:[2,5],tracking_uri:2,train:[1,2,3,4,7,8,9,10,11,12],train_batch_s:11,train_dataset:10,train_evalu:[2,10],train_load:[0,2,4,11],train_loss:0,train_sampl:1,train_updat:2,trainer:[0,2,3,4,7,8,9,10,11,12],training_update_funct:8,transform:[0,2,3,8,10],trigger:[2,4],truncat:9,truth:[3,10],tune:5,tupl:[1,2,4,10,12],tutori:2,two:[0,1,8,10,11],type:[0,1,2,3,4,7,8,10,12],typic:[0,2],uint8:12,unaggreg:2,unaverag:10,under:[3,10],understand:7,union:[3,4,10,12],unix:2,unregist:4,until:[0,2,4],unweight:10,updat:[0,1,2,3,4,7,10,11],update_fn:[2,7],update_funct:[1,11],update_model:[0,4],upload:2,upload_source_fil:2,uri:2,url:2,usag:[0,1,2,4,10],use:[0,1,2,3,4,7,8,10],used:[0,1,2,3,4,8,10],useful:[3,8,10],user:[0,2,4,7,8,10,11],user_handler_funct:0,usernam:2,uses:[2,8],using:[0,2,3,4,5,7,8,9,10,11],usual:[2,4,10],util:[0,1,3,4,9,11],val:1,val_acc:[4,8],val_batch_s:11,val_dataload:4,val_load:[7,11],val_loss:8,valid:[0,2,4,7,8,9,10,11],validation_accuraci:2,validation_evalu:2,validation_load:0,validation_set:2,valu:[1,2,3,4,8,10],value_0:2,value_1:2,variabl:[2,10],variableaccumul:10,variant:5,variat:5,variou:[2,5,10,11],vb_logger:2,vd_logger:2,vector:10,version:[2,9],via:[0,4],view:[2,10],visdom:[1,2,5],visdom_logg:9,visdom_password:2,visdom_port:2,visdom_server_url:2,visdom_usernam:2,visdomlogg:[1,2],vision:[2,5],visual:2,voc2012:5,vt_co:8,wacv:2,wai:[0,7,10],wait:[1,8],want:[0,2,3,7,8,10,11],warm:2,warmup_dur:2,warmup_end_valu:2,warmup_start_valu:2,warn:12,wave:[2,3],wavehedgesdist:3,weakref:4,weight:[2,10],weights_scalar_handl:2,weightshisthandl:2,weightsscalarhandl:2,welcom:11,well:11,what:[0,2],whatev:2,whd:3,when:[0,1,2,3,4,7,8,9,10,11,12],when_validation_loop_is_don:7,where:[1,2,3,7,8,10,11],whether:[2,4,10],which:[0,2,3,4,7,8,10],whole:[1,2],window:2,winter:2,wise:1,wish:2,with_gpu_stat:1,with_pbar:1,with_pbar_on_it:1,without:[0,5,8,9,10,11],work:[2,8,10],worker:[2,12],would:[0,10,11],wrap:2,wrapper:2,write:[5,9],write_result:2,written:[10,12],wrt:12,xlabel:2,y_pred:[0,3,4,7,10,11],y_true:10,ylabel:2,ylim:2,you:[2,3,4,8,9,10,11],your:[2,11],zebra:5,zero:[2,4],zero_grad:[0,4,7,11]},titles:["Concepts","ignite.contrib.engines","ignite.contrib.handlers","ignite.contrib.metrics","ignite.engine","Examples","ignite.exceptions","FAQ","ignite.handlers","Ignite Your Networks!","ignite.metrics","Quickstart","ignite.utils"],titleterms:{accumul:7,arithmet:10,backpropag:1,backward:7,base:7,cifar10:5,code:11,complet:[8,10],comput:10,concaten:2,concatschedul:2,concept:0,contrib:[1,2,3],cosineannealingschedul:2,creat:[7,10],custom:[7,10],custom_ev:2,distribut:[5,10],each:7,engin:[0,1,4,7],epoch:7,evalu:1,event:[0,7],exampl:[2,5],except:6,explan:11,faq:7,forward:7,gradient:7,handler:[0,2,8],has:7,helper:1,how:10,ignit:[1,2,3,4,6,8,9,10,12],instal:9,iter:7,its:7,linear:2,linearcyclicalschedul:2,list:[8,10],lr_finder:2,lrschedul:2,method:1,metric:[3,10],mlflow_logg:2,mnist:5,more:2,neptune_logg:2,network:9,nightli:9,notebook:5,other:5,own:7,param_schedul:2,paramet:2,pass:7,piecewis:2,polyaxon_logg:2,quickstart:11,regress:3,releas:9,reproduc:5,resum:0,schedul:2,setup:1,state:0,tensorboard_logg:2,throught:1,time:1,time_profil:2,timelin:0,torch:2,tqdm_logger:2,train:[0,5],trainer:1,truncat:1,util:12,visdom_logg:2,your:9}})