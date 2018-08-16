export function topic(data, clickFunc) {
  let template = '<ul id="topic-ul" class="mdc-list" aria-orientation="vertical">';
  if (data) {
    for (const topicObj in data) {
      const topicData = data[topicObj];
      let imgUrl = topicData.topicUrl ? topicData.topicUrl: './assets/no-image.png';

      template += `<li class="mdc-list-item topic-li" data-id='${topicData.id}' tabindex="-1">
      <div class='pr-2'><img src="${imgUrl}" class="topicImage"/></div><span>${topicData.topicText}</span>
      
      <div class="inline-topic-btn">
      <a class="editTopicBtn pl-lg-1" data-id='${topicData.id}' tabindex="-1"><i class="material-icons editTopic">
      edit
      </i></a>
      <a class="deleteTopicBtn pl-lg-1" data-id='${topicData.id}' tabIndex="-1"><i class="material-icons deleteTopic">
      delete
      </i></a></div></li>`;
    }
  }
  template += '</ul>';
  return template;
}

export function loadButtons() {
  return `<div id='topicManagerContainer'><div  class='pt-5'><div class="text-left mb-3">
 <button class="addTopicBtn mdc-fab mdc-fab--extended"> <span class="material-icons mdc-fab__icon mdc-fab__mini">add</span>
 <span class="mdc-fab__label mdc-fab__mini">Add Topic</span> </button>
  

</div> 
</div>
<div id="topicListWrapper">
 <div class="d-none"><nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
  
    <li class="page-item prevTopic disabled">
      <a class="page-link"  tabindex="-1">Previous</a>
    </li>
    
    <li class="page-item nextTopic">
      <a class="page-link" >Next</a>
    </li>
  </ul>
</nav></div>
</div></div>`;
}
export function addTopicDialog(topicObj) {
  let topicTxt = '';
  let topicUrl = '';
  if (topicObj) {
    topicTxt = topicObj.topicText ? topicObj.topicText : '';
    topicUrl = topicObj.topicUrl ? topicObj.topicUrl : '';
  }

  return `<aside id="my-mdc-dialog"
  class="mdc-dialog"
  role="alertdialog"
  aria-labelledby="my-mdc-dialog-label"
  aria-describedby="my-mdc-dialog-description">
  <div class="mdc-dialog__surface">
    <header class="mdc-dialog__header">
      <h2 id="my-mdc-dialog-label" class="mdc-dialog__header__title">
        Add new Topic
      </h2>
    </header>
    <section id="my-mdc-dialog-description" class="mdc-dialog__body">
    <div class="container"><div class="row">
        <div class="col-lg-6">
    <div class="mdc-text-field-topic">
    <input type="text" id="my-text-field" value="${topicTxt}" class="mdc-text-field__input">
    <label class="mdc-floating-label" for="my-text-field">Topic</label>
    <div class="mdc-line-ripple"></div>
  </div>
  </div>
  <div class="col-lg-6">
  <div class="mdc-text-field-topic-url">
    <input type="url" id="my-text-field" value="${topicUrl}"  class="mdc-text-field__input">
    <label class="mdc-floating-label" for="my-text-field">Topic Image Url</label>
    <div class="mdc-line-ripple"></div>
  </div>
  </div>
  </div>
  </div>
    </section>
    <footer class="mdc-dialog__footer">
      <button type="button" style="color:white" class="mdc-button btn-color mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
      <button type="button" class="mdc-button btn-color mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
    </footer>
  </div>
  <div class="mdc-dialog__backdrop"></div>
</aside>`;
}

export function openConfirmation() {
  return `<aside id="my-mdc-dialog-delete-confirm"
  class="mdc-dialog"
  role="alertdialog"
  aria-labelledby="my-mdc-dialog-label"
  aria-describedby="my-mdc-dialog-description">
  <div class="mdc-dialog__surface">
    <header class="mdc-dialog__header">
     
    </header>
    <section id="my-mdc-dialog-description" class="mdc-dialog__body">
    Are you sure you want to delete this topic?
    </section>
    <footer class="mdc-dialog__footer">
      <button type="button" class="mdc-button btn-color mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
      <button type="button" class="mdc-button btn-color mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
    </footer>
  </div>
  <div class="mdc-dialog__backdrop"></div>
</aside>`;
}
