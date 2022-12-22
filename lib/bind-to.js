function bindValue (item, data) {
    const key = item.data('bind-value');
    if (key in data) {
        item.html(data[key]);
    }
}


$.fn.bindTo = function (data) {
    const elementList = this.find("[data-bind-value]");
    for (let el of elementList) {
        bindValue($(el), data);
    }
}