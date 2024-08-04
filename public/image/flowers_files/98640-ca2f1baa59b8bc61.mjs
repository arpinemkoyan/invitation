"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[98640],{26616:(e,t,r)=>{r.d(t,{$S:()=>o,V$:()=>s,_4:()=>a,iY:()=>n,mR:()=>i});let o="REFRESH_ALL_EXPERIENCES_MULTI",s="UPDATE_EXPERIENCE_MULTI",i="FETCH_EXPERIENCES",a="REFRESH_ALL_EXPERIENCES",n="UPDATE_EXPERIENCE"},201417:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e){return"object"==typeof e&&null!==e&&e.constructor===Object&&"[object Object]"===Object.prototype.toString.call(e)}},760890:(e,t,r)=>{r.d(t,{Z:()=>f,v:()=>_});var o=r(667294),s=r(685679),i=r(608029),a=r(367180),n=r(297329),d=r(107860),l=r(906623),u=r(279600),c=r(748058);let p=(0,i.XV)("GridProfiler"),_=()=>!!window.addEventListener&&!!window.removeEventListener&&(0,a.VZ)(),y=e=>"LAYOUT"===e.status&&500||"TIMING"===e.status&&100||null,E=(e,t)=>{if(!t){let t=(0,a.LM)();if(t===e)return p("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!(0,a.F9)())return p("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}},R=(e,t)=>{let r=0,o=0,s=0,i=0,a=0;return e=e.filter(e=>"pin"===e.type),t.forEach((t,n)=>{let d;let l=t.fileName.split(".")[0];d=e[n],l!==d?.image_signature&&(d=e.find(e=>l===e?.image_signature)),void 0===d?a+=1:d.is_promoted||d.recommendation_reason?.reason==="PROMOTED_PIN"||d?.promoter?.length?s+=1:null!==d.story_pin_data_id&&void 0!==d.story_pin_data_id?r+=1:d?.videos?.video_list?o+=1:i+=1}),{storyPinCount:r,videoCount:o,adCount:s,imageCount:i,unknownCount:a}},m=(e,t)=>{let r=()=>{window.removeEventListener(e,r),t()};return window.addEventListener(e,r),()=>window.removeEventListener(e,r)};function f({isAtEndOfFeed:e,pinData:t,includeBackgroundImages:r,includeVideos:_=!1,includeSections:f}){let I=(0,l.E)(),b=I?.getId(),g=I?.setVisuallyCompleteResult,[A,S]=(0,o.useState)({status:"DISABLED"});(0,o.useEffect)(()=>{g?S({status:"LAYOUT",failedCount:0,numOfItemsChecked:0}):S({status:"DISABLED"})},[b,g]),(0,o.useEffect)(()=>{if("DISABLED"!==A.status&&(0,d.ZP)(`GridVisuallyCompleteProfiler_${A.status}`),p("new status",A),"LAYOUT"===A.status){let e=m("scroll",()=>{(0,d.ZP)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[A.status]),(0,c.Z)(()=>{if(!I||!g)return;let{abort:o,getMetricId:d}=I,l=d();switch(A.status){case"LAYOUT":{let t=E(A.numOfItemsChecked,e);t.complete?S({status:"TIMING",failedCount:0,pinElements:(0,a.cQ)(r,_,f)}):500*A.failedCount>6e4?((0,n.A9)(`images.${(0,s.KJ)(l)}.visuallyComplete.maxLayoutAttempt`),o("visuallyComplete_layoutTimeout"),S({status:"DISABLED"})):S({...A,failedCount:A.failedCount+1,numOfItemsChecked:t.numOfItemsChecked});break}case"TIMING":{let e=(0,u.Cg)(),r=A.pinElements.length,a=[],d=0,c=0,_=0;if(A.pinElements.forEach(({element:t,fileName:r})=>{let o=e.find(e=>e.name.endsWith(r));o?o.responseEnd?(a.push(o),(0,i.v5)(t,"green")):(_+=1,(0,i.v5)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(c+=1,(0,i.v5)(t,"red")):(d+=1,(0,i.v5)(t,"greenyellow"))}),d||_)100*A.failedCount>6e4?((0,n.A9)(`images.${(0,s.KJ)(l)}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:r,incompleteCount:d,noTimingCount:c,noTimingResponseEndCount:_}}),o("visuallyComplete_timingTimeout"),S({status:"DISABLED"})):S({...A,failedCount:A.failedCount+1});else{if(p(`All ${a.length} images are fetched`),t&&t.length){let e=R(t,A.pinElements);Object.entries(e).forEach(([e,t])=>{I.addBinaryAnnotation(e,t,"I16")}),(0,n.A9)(`${(0,s.KJ)(l)}.pinTypes`,{tags:e})}g({imageTimings:a}),S({status:"DISABLED"}),(0,n.A9)(`images.${(0,s.KJ)(l)}.visuallyComplete.complete`,{tags:{totalImageCount:r,noTimingCount:c}})}}}},y(A))}},466385:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e,t,r){let o=[...e],s=o.splice(t,1)[0];return o.splice(r,0,s),o}},689390:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e){if((e||"").includes("--")){let t=e.split("--"),r=t.pop();return{text:t.join("--"),pinId:r}}return{text:"",pinId:e}}},748058:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(667294);let s=(e,t)=>{let r=(0,o.useRef)(()=>{});(0,o.useEffect)(()=>{r.current=e},[e]),(0,o.useEffect)(()=>{if(null===t)return()=>{};let e=setInterval(()=>r.current(),t);return()=>clearInterval(e)},[t])}},923024:(e,t,r)=>{r.d(t,{L:()=>d,r:()=>n});var o=r(525364),s=r(447479),i=r(782005);let a=["search_articles_story","search_for_you_upsell","search_story_separator","search_story_landing_page_header","shop_tab_upsell","story_pins_search_upsell","structured_search_bubble","user_style_story_v2","guided_search_entry_points_story"];function n({query:e,rs:t,scope:r},a){let n=(0,o.BE)(),d=!n?.viewType&&!n?.viewParameter,l=(0,i.wF)(r);if(!d&&l){let{viewType:r,viewParameter:o}=n??{};a({event_type:l,view_type:r,view_parameter:o,aux_data:{query:e,rs:t||s.i.UNKNOWN}})}t===s.i.HASHTAG_CLOSEUP?a({event_type:101,component:13065,element:10273,view_type:142}):t===s.i.HASHTAG_PINREP&&a({event_type:101,component:0,element:10349,view_type:142})}let d=(e=[])=>{let t=!0;return e.reduce((e,r)=>(t&&r.story_type&&a.includes(r.story_type)&&r.display_options?.num_columns_requested===0?e.searchFullWidthStories.push(r):(t=!1,e.filteredResults.push(r)),e),{searchFullWidthStories:[],filteredResults:[]})}},670633:(e,t,r)=>{r.d(t,{J:()=>f,Z:()=>T});var o=r(466385),s=r(419821),i=r(414630),a=r(923024),n=r(945488),d=r(539426),l=r(949457),u=r(937310),c=r(29301);let p=new Set(["PinResource","RepinResource"]),_={ApiResource:e=>e?.url==="/v3/orientation/nux_creator_recommendations/"?"nux-creator-recommendations":e?.url==="/v3/users/me/interests/"?`recommended-interests:${e.data?.blend_type}`:"",AggregatedActivityFeedResource:e=>`trieditfeed:${e.aggregated_pin_data_id}`,AggregatedCommentFeedResource:e=>`aggregated-comments:${e.objectId}`,AggregatedCommentReplyFeedResource:e=>`${u.Z.AGGREGATED_COMMENT_REPLIES}:${e.objectId}`,BoardlessPinsResource:e=>`boardless-pins:${e.userId}`,BestPinsFeedAltResource:e=>`idea-page-best-pins:${e.interest}`,BoardArchiveResource:()=>"archived-boards",BoardContentRecommendationResource:e=>`recommendation-feed:${e.id}`,BoardFeedResource:e=>`boardfeed:${e.board_id}`,BoardSectionsRepinResource:e=>`board-sections:${e.board_id}`,BoardSectionsResource:e=>`board-sections:${e.board_id}`,BoardSectionPinsResource:e=>`board-section-pins:${e.section_id}`,BoardsFeedResource:e=>`profile-boards:${e.username}`,BoardToolsFeedResource:e=>`board-tools:${e.boardId}`,ConversationsResource:()=>"conversations",DidItLikedByResource:e=>`triedit-likes:${e.didItDataId}`,DidItUserFeedResource:e=>`profile-tried:${e.username}`,HolidaySpotlightResource:e=>`holiday-spotlight:${e.storyType}`,InterestResource:e=>`klp-pins:${e.interest}`,MoreIdeasTabsBoardsResource:()=>"homefeed-more-ideas-tabs",NewsHubResource:()=>"notifications",NewsHubDetailsResource:e=>`newshubdetail:${e.news_id}`,NuxInterestsResource:()=>"nuxTopics",PinsFromBrandResource:e=>`brand-pins:${e.pin}`,ReactionsResource:e=>`reactions:${e.pin_id}`,RelatedArticlesResource:e=>`related-articles:${e.article_id}`,RelatedModulesResource:e=>`related-modules:${e.pin_id}`,RelatedPinFeedResource:e=>`related-pins:${e.pin}`,RelatedProductFeedResource:e=>"pin"===e.shop_source?`closeup-related-products:${e.pin}`:`related-products:${e.pin}`,RelatedStreamResource:e=>`related-story-pins:${e.pinId}`,SearchResource:e=>{let t=`search:${e.scope}:${e.query}:${e.filters||""}:${e.article||""}`;return e.auto_correction_disabled?`${t}:auto-correction-disabled`:t},BaseSearchResource:e=>{let{appliedProductFilters:t,article:r,auto_correction_disabled:o,filters:s,journey_depth:i,query:a,scope:n,selected_one_bar_modules:d,source_module_id:l}=e;return`search:${(0,c.Z)({appliedFilters:t,article:r,autoCorrectionDisabled:o,filters:s,journeyDepth:i,query:a,scope:n,selectedOneBarModules:d,sourceModuleId:l})}`},SectionToolsFeedResource:e=>`section-tools:${e.sectionId}`,ShareSuggestionsTypeaheadResource:e=>`share-suggestions:${e.board||e.user}:${e.term}`,ShoppingFeedModularizedResource:e=>e.saved_products_only?`board-shop-saved:${e.board_id}`:`board-shop-related:${e.board_id}`,StoryFeedResource:e=>`story-feed:${e.feed_type}:${e.request_params}`,SuggestedCreatorFollowsResource:()=>"suggested-creator-follows",StoryPinTaggedProductsResource:()=>"story-pin-tagged-products",TodayArticleFeedResource:e=>`today-article:${e.id}`,IdeasHubTodayArticlesResource:e=>`today-article:${e.interest_id}`,TodayTabInterestFeedResource:e=>`today-article-interestfeed:${e.interest_id}`,TodayTabResource:()=>"today-tab",SeoTier1CandidateResource:()=>"tier1-feed",UnifiedCommentsResource:e=>`unified-comments:${e.aggregated_pin_id}`,UserActivityPinsResource:e=>`profile-pins-feed:${e.user_id}`,UserHomefeedResource:e=>e.pin_quiz?"pin-quiz":"homefeed",UserFollowingResource:e=>`user-following:${e.username}`,UserRecentActivityResource:e=>`user-recent-activity:${e.filter_type}`,UserStoryPinsFeedResource:e=>`story-pins-feed:${e.user_id}`,VideosFeedResource:()=>"videos-feed",VisualLiveSearchResource:e=>`visual-search:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualLiveSearchProductFeedResource:e=>`visual-search-products:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualSearchFlashlightUnifiedResource:e=>`related-products-unified:${e.pin_id}`,BoardFollowingResource:e=>`board-following:${e.username}`,InterestFollowingResource:e=>`topic-following:${e.username}`,UserPinsResource:e=>`profile-pins:${e.username}`,TopicFeedResource:e=>e.best_pins?`best-topic-pins:${e.interest}`:`topic-pins:${e.interest}`},y={AggregatedActivityFeedResource:({options:{aggregated_pin_data_id:e}})=>({type:u.Z.TRIED_IT_FEED,id:e}),AggregatedCommentFeedResource:({options:{objectId:e}})=>({type:u.Z.AGGREGATED_COMMENTS,id:e}),AggregatedCommentReplyFeedResource:({options:{isUnifiedComment:e,objectId:t}})=>({type:e?u.Z.AGGREGATED_COMMENT_REPLIES:u.Z.AGGREGATED_COMMENTS,id:t,reversed:!0}),BoardFeedResource:({options:{board_id:e}})=>({type:u.Z.BOARDFEED,id:e}),BoardlessPinsResource:({options:{userId:e}})=>({type:u.Z.BOARDLESS_PINS,id:e}),BoardSectionPinsResource:({options:{section_id:e}})=>({type:u.Z.BOARD_SECTION_PINS,id:e}),BoardSectionsResource:({options:{board_id:e}})=>({type:u.Z.BOARD_SECTIONS,id:e}),BoardsResource:({options:{username:e,sort:t}})=>({type:u.Z.PROFILE_BOARDS,id:(0,n.Z)(e,t)}),BaseSearchResource:({options:{appliedFilters:e,appliedProductFilters:t,auto_correction_disabled:r,filters:o,journey_depth:s,query_pin_sigs:n,query:d,rs:l,scope:c,selected_one_bar_modules:p,source_module_id:_,user:y},response:E})=>({type:u.Z.SEARCH_PINS,id:(0,i.Tb)({appliedFilters:e,appliedProductFilters:t,autoCorrectionDisabled:r,filters:o,journeyDepth:s,query:d,rs:l,scope:c,selectedOneBarModules:p,selectedPinImgSig:n,sourceModuleId:_,user:y}),items:E.resource_response.data?.results?(0,a.L)(E.resource_response.data.results).filteredResults:[]}),DidItCommentsResource:({options:{objectId:e}})=>({type:u.Z.AGGREGATED_COMMENTS,id:e,reversed:!0}),DidItUserFeedResource:({options:{username:e}})=>({type:u.Z.TRIED_IT_FEED,id:e}),IdeasHubTodayArticlesResource:({options:{interest_id:e}})=>({type:u.Z.TODAY_TAB,id:e}),RelatedArticlesResource:({options:{article_id:e}})=>({type:u.Z.TODAY_TAB,id:e}),StoryPinDraftsResource:({options:{userId:e}})=>({type:u.Z.STORY_PIN_DATA,id:e}),TodayTabInterestFeedResource:({options:{interest_id:e}})=>({type:u.Z.TODAY_ARTICLE_INTEREST_FEED,id:e}),TodayTabResource:()=>({type:u.Z.TODAY_TAB,id:"todayTab"}),UnifiedCommentsPreviewResource:({options:{aggregated_pin_id:e}})=>({type:u.Z.UNIFIED_COMMENTS,id:e}),UnifiedCommentsResource:({options:{aggregated_pin_id:e,is_reversed:t}})=>({type:u.Z.UNIFIED_COMMENTS,id:e,reversed:t}),UserActivityPinsResource:({options:{user_id:e}})=>({type:u.Z.PROFILE_PINS_FEED,id:e}),UserStoryPinsFeedResource:({response:e,options:{user_id:t}})=>({type:u.Z.STORY_PINS_FEED,id:t,items:e.resource_response.data||[]})},E=(e,{pinId:t,feedId:r})=>e[r]?{...e,[r]:e[r].filter(e=>!("pin"===e.type&&e.id===t))}:e,R=(e,{pinId:t,feedId:r})=>e[r]?{...e,[r]:[{type:"pin",id:t},...e[r]]}:e,m=(e,{pinId:t,oldFeedId:r,newFeedId:o})=>r===o?e:R(E(e,{pinId:t,feedId:r}),{pinId:t,feedId:o}),f=(e,t)=>e in _?_[e](t):null,I=(e,t)=>{switch(e.type){case"story":return{id:e.id,type:"story",story_type:e.story_type};case"module":return{id:e.id,type:"module",name:e.name};case"user":return{id:e.id,type:"user"};case"board":return t===u.Z.PROFILE_BOARDS?{id:e.id,type:"board",onProfile:!0,profileGroup:e.archived_by_me_at?"archived":e.privacy||"public"}:{id:e.id,type:"board",onProfile:!1};case"board_section":return{type:"boardsection",id:e.id};case"triedit":return{type:"triedit",id:e.id};case"aggregatedcomment":return{type:"aggregatedcomment",id:e.id};case"home_feed_tab":return{type:"home_feed_tab",id:e.id,name:e.name};case"storypindata":return{id:e.id,type:"storypindata"};case"todayarticle":return{type:"todayarticle",id:e.id};case"unifiedcommentspreview":return"userdiditdata"===e.unified_comment.type?{type:"triedit",id:e.unified_comment.id}:{type:"aggregatedcomment",id:e.unified_comment.id};default:return{type:"pin",id:e.id}}},b=(e,t)=>t?`board-section-pins:${t}`:`boardfeed:${e}`,g=(e,t,r)=>{let o=r||d.Z[e];if(o===l.LR)return t.result;if(o===l.sN)return t.result.map(e=>({id:e,schema:"board"}));if(o===l.Gn)return t.result.map(e=>({id:e,schema:"user"}));if(o===l.Ht)return t.result.map(e=>({id:e,schema:"invite"}));if(o===l.fE)return t.result.map(e=>({id:e,schema:"reaction"}));if("object"==typeof o){let e=Object.entries(o).find(([,e])=>e===l.LR);if(e)return t.result[e[0]]}return null},A=(e,t)=>e.map(e=>{let{id:r,schema:o,type:s}=e;return"home_feed_tabs"===s?e:o?{id:r,type:o,trackingParams:"pin"===o?t.pins[r].tracking_params:void 0,user_id:void 0}:null}).filter(Boolean),S=(e,t,r)=>Object.keys(e).reduce((o,s)=>{let i=e[s]||[],a=i.filter(e=>!(e.type===t&&e.id===r));return i.length!==a.length&&(o[s]=a),o},{...e}),T=(e={},t)=>{switch(t.type){case s.zP:case s.aW:{let{payload:r}=t,{resource:o,options:i,normalizedResponse:a,schema:n}=r;if(a&&o in _){let r=g(o,a,n);if(r&&Array.isArray(r)){let n=_[o](i);if("ShoppingFeedModularizedResource"===o){let{board_id:t,saved_products_only:o}=i??{},s=`board-shop-related:${t}`,n=`board-shop-saved:${t}`,d=`board-shop-saved-preview:${t}`,l=[...e[s]||[]],u=[...e[n]||[]],c=[...e[d]||[]];return A(r,a.entities).forEach(e=>{o?u.push(e):a.entities.pins&&a.entities.pins[e.id]?.board===t?c.push(e):l.push(e)}),{...e,[s]:l,[n]:u,[d]:c}}if("BoardToolsFeedResource"===o||"SectionToolsFeedResource"===o)return{...e,[n]:r};if("UnifiedCommentsResource"===o){let o=A(r,a.entities);if(e[n]&&s.aW===t.type)return{...e,[n]:[...e[n],...o]};return{...e,[n]:o}}{let o=[...t.type===s.aW&&e[n]||[],...A(r,a.entities)];return{...e,[n]:o}}}}else{let{data:o}=r.response.resource_response;if(!r.options?.redux_normalize_feed)return e;let i=y[r.resource]({options:r.options,response:r.response});if(i){let{type:r,id:a,items:n,reversed:d}=i,l=(n||o||[]).map(e=>I(e,r));d&&(l=l.reverse());let u=`${r}:${a}`,c=e[u];if(c||t.type!==s.aW){let r=c||[],o=l;return t.type===s.aW&&(o=d?l.concat(r):r.concat(l)),{...e,[u]:o}}}}break}case"FEED_ITEM_REORDERED":{let{payload:{feedType:r,feedId:s,itemType:i,targetItemId:a,sourceItemId:n}}=t,d=`${r}:${s}`,l=e[d]||[],c=-1,p=-1;if([u.Z.BOARDFEED,u.Z.BOARD_SECTION_PINS,u.Z.BOARD_SECTIONS,"profileBoards"].includes(r)&&(c=l.findIndex(e=>e.type===i&&e.id===n),p=l.findIndex(e=>e.type===i&&e.id===a)),-1!==c&&-1!==p)return{...e,[d]:(0,o.Z)(l,c,p)};break}case"FEED_ITEMS_REMOVED":{let{payload:{feedType:r,feedId:o,inverseSelection:s,itemType:i,itemIds:a=[]}}=t,n=`${r}:${o}`,d=e[n]||[];if(d&&d.length>0&&(r===u.Z.BOARD_SECTION_PINS||r===u.Z.BOARDFEED)){let t=d.filter(e=>{let t=a.includes(e.id);return!(e.type===i&&(s&&!t||!s&&t))}),r=!!t.find(e=>"pin"===e.type);return{...e,[n]:r?t:[]}}if(d&&d.length>0&&r===u.Z.BOARD_SECTIONS){let t=d.filter(e=>{let t=a.includes(e.id);return!(e.type===i&&t)});return{...e,[n]:t}}if(d&&d.length>0&&(r===u.Z.AGGREGATED_COMMENTS||r===u.Z.BOARDLESS_PINS||r===u.Z.PROFILE_PINS_FEED||r===u.Z.STORY_PINS_FEED||r===u.Z.UNIFIED_COMMENTS||r===u.Z.TRIED_IT_FEED||r===u.Z.STORY_PIN_DATA)){let t=d.filter(e=>{let t=a.includes(e.id);return!(e.type===i&&t)});return{...e,[n]:t}}break}case"FEED_ITEMS_ADDED":{let{payload:{feedType:r,feedId:o,itemType:s,itemIds:i=[],prepend:a}}=t,n=`${r}:${o}`,d=e[n]||[];if(d&&(r===u.Z.BOARD_SECTION_PINS||r===u.Z.BOARDFEED||r===u.Z.BOARDLESS_PINS)){let t=i.map(e=>({id:e,type:s})),r=0;"story"===(d[0]||{}).type&&(r=1),"story"===(d[1]||{}).type&&(r=2);let o=[...d.slice(0,r),...t,...d.slice(r)];return{...e,[n]:o}}if(d&&r===u.Z.BOARD_SECTIONS){let t=[...i].reverse().map(e=>({id:e,type:"boardsection"})),r=d?[...t,...d]:[...t];return{...e,[n]:r}}if(r===u.Z.AGGREGATED_COMMENTS||r===u.Z.AGGREGATED_COMMENT_REPLIES||r===u.Z.PROFILE_PINS_FEED||r===u.Z.STORY_PINS_FEED||r===u.Z.UNIFIED_COMMENTS){let t=i.map(e=>({id:e,type:s})),r=d?[...a?t:d,...a?d:t]:t;return{...e,[n]:r}}if(r===u.Z.TRIED_IT_FEED){let t=i.map(e=>({id:e,type:s})),r=d?[...t,...d]:t;return{...e,[n]:r}}break}case"FEED_INVALIDATE":{let{payload:{feedType:r,feedId:o}}=t,s=`${r}:${o}`;return e[s],{...e,[s]:null}}case"APPEND_FEED_ITEMS":{let{payload:{id:r,items:o,options:s}}=t,i=e[r];if(!i)return{...e,[r]:o};{let t;return t=s.isPrepend?i[0]&&"story"===i[0].type?[].concat(i[0],o,i.slice(1)):o.concat(i):i.concat(o),{...e,[r]:t}}}case"PIN_DELETE":{let{payload:{pinId:r}}=t;return S(e,"pin",r)}case"BOARD_ARCHIVE":{let{payload:{boardId:r,username:o}}=t,s=`profile-boards:${o??""}`;if(e[s])return{...e,[s]:e[s].filter(e=>e.id!==r)};break}case"BOARD_UNARCHIVE":{let{payload:{boardId:r}}=t,o="archived-boards";if(e[o])return{...e,[o]:e[o].filter(e=>e.id!==r)};break}case"BOARD_DELETE":{let{payload:{boardId:r}}=t;return S(e,"board",r)}case"BOARD_SECTION_DELETE":{let{payload:{boardSectionId:r}}=t;return S(e,"boardsection",r)}case"PINS_MOVE":{let{payload:{source:r,target:o,pinIds:s,userId:i}}=t,a=r.boardlessPins&&i&&`boardless-pins:${i}`||r.boardId&&b(r.boardId,r.sectionId),n=b(o.boardId,o.sectionId);return s.reduce((e,t)=>m(e,{pinId:t,oldFeedId:a,newFeedId:n}),e)}case"PINS_MOVE_ALL":{let{payload:{source:r,target:o,excludePinIds:s}}=t,i=b(r.boardId,r.sectionId),a=b(o.boardId,o.sectionId),n={...e,[i]:s.map(e=>({type:"pin",id:e}))};return delete n[a],n}case"PIN_EDIT":{let{payload:{pinId:r,boardId:o,sectionId:s="",source:{boardId:i,sectionId:a}}}=t;return m(e,{pinId:r,oldFeedId:b(i,a),newFeedId:b(o,s)})}case s.AF:if(p.has(t.payload.resource)){let r;let o=t.payload.response.resource_response.data,{board:s}=o;if("quick_saves"===s.layout)r=`boardless-pins:${t.payload.options.user_id}`;else{let e=t.payload.options.section;r=e?`board-section-pins:${e}`:`boardfeed:${s.id}`}if(e[r]){let t={...e},s={id:o.id,type:"pin",trackingParams:o?.tracking_params};return t[r]=[s].concat(e[r]),t}}if("BoardSectionResource"===t.payload.resource&&t.payload.normalizedResponse){let r=t.payload.normalizedResponse.result,o=t.payload.normalizedResponse.entities.boardsections[r].board,s=`board-sections:${o}`;if(e[s]){let t={...e};return t[s]=[{id:r,type:"boardsection"}].concat(e[s]),t}}if("AggregatedCommentResource"===t.payload.resource&&t.payload.normalizedResponse){let r={id:t.payload.normalizedResponse.result,type:"aggregatedcomment"},o={...e};for(let s of["aggregated-comments","unified-comments"]){let i=`${s}:${t.payload.options.objectId}`;e[i]&&(o={...o,[i]:[r].concat(o[i])})}return o}if("AggregatedCommentReplyResource"===t.payload.resource&&t.payload.normalizedResponse){let r=`${u.Z.AGGREGATED_COMMENT_REPLIES}:${t.payload.options.objectId}`;return{...e,[r]:[...e[r]||[],{id:t.payload.normalizedResponse.result,type:"aggregatedComment"}]}}if("ReactionsResource"===t.payload.resource&&t.payload.normalizedResponse){let{reaction_pin_id:r,reaction_type:o}=t.payload.options;if("reaction"===t.payload.options.action_type){let s=`reactions:${t.payload.options.pin_id}`,i={...e},a={id:`${r}:${t.payload.options.user_id}:${o}`,type:"reaction",trackingParams:void 0};return i[s]=[a].concat(e[s]),i}if("unreaction"===t.payload.options.action_type)return S(e,"reaction",`${r}:${t.payload.options.user_id}`)}break;case"COMPLETE_STORY":{let{payload:{storyId:r}}=t;return S(e,"story",r)}}return e}},706196:(e,t,r)=>{function o(e){let[t,r]=e.split(/\/(.*)+/);return{filepath:r,site:t}}function s(e,t){return t?`${e||""}/${t}`:`/${e||""}`}r.d(t,{ac:()=>o,ke:()=>s})},84768:(e,t,r)=>{r.d(t,{MM:()=>a,uo:()=>n,wH:()=>i});var o=r(342513),s=r(706196);let{Provider:i,useHook:a}=(0,o.Z)("HandlerId");function n(){let e=a();return(0,s.ac)(e).site}},118923:(e,t,r)=>{r.d(t,{P:()=>a,b:()=>n});var o=r(340523),s=r(5859),i=r(528252);function a({checkExperiment:e,isAuthenticated:t,isEarlyHydrationEnabled:r}){return r||!!e&&e(t?"web_auth_lazy_component":"web_unauth_lazy_component").anyEnabled}function n(){let{checkExperiment:e}=(0,o.F)(),{isAuthenticated:t}=(0,s.B)();return a({checkExperiment:e,isAuthenticated:t,isEarlyHydrationEnabled:(0,i.z5)()})}},832853:(e,t,r)=>{r.d(t,{Z:()=>d});var o=r(667294),s=r(14583);let{Provider:i,useMaybeHook:a}=(0,r(342513).Z)("LazyComponent");var n=r(785893);function d(e,t,r){let i,d,l;let u=t?.ssr??!0?o.Suspense:s.Z,c=r=>{a(),t?.dynamicRequestKey,d||(d=(0,o.lazy)(()=>e(r)));let s=(0,o.useRef)(i??d).current;return(0,n.jsx)(u,{fallback:r.fallback||t?.fallback,children:(0,n.jsx)(s,{...r})})};function p(t){return l||(l=(async()=>i=(await e(t)).default)()),l}return c.preload=e=>{p(e)},c.load=e=>p(e),c}},528252:(e,t,r)=>{r.d(t,{DB:()=>l,SS:()=>n,WP:()=>i,z5:()=>d});var o=r(667294),s=r(706196);let i=(0,o.createContext)({anyEnabled:!1,group:""}),a={anyEnabled:!1,group:""};function n({experimentsClient:e,isAuthenticated:t,handlerId:r}){let{site:o}=(0,s.ac)(r??"");return"www"!==o?a:e?.checkExperiment(t?"web_early_hydration_auth":"web_early_hydration_unauth")??a}function d(){return(0,o.useContext)(i).anyEnabled}function l(){return(0,o.useContext)(i)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/98640-ca2f1baa59b8bc61.mjs.map