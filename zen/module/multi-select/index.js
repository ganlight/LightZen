var MultiSelect = function(config) {
    if (config && config.ele && config.data) {
        this.ele = $("#" + config.ele);
        this.data = config.data;
        this.para = "";
        this.rend(config.data);
        this.bind();
    }
    return this;
}

MultiSelect.prototype = {
    rend: function(data) {
        var _this = this;
        var parent = _this.ele.find(".select-list");
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var clone = $("<div>").addClass("select-item");
            zen.store.data(clone, item);
            clone.attr("data-value", item.value).text(item.name);
            // MultiSelect.bind(clone);
            parent.append(clone);
        }
    },
    bind: function() {
        var _this = this;
        this.ele.find(".select-item").click(function() {
            var $this = $(this);
            if (!$this.attr("data-value")) {
                _this.ele.find(".select-item").removeClass("selected");
            } else {
                _this.ele.find(".select-item").eq(0).removeClass("selected");
            }
            $this.toggleClass("selected");
            _this.rendValue();
        });
    },
    rendValue: function() {
        var _this = this;
        var parent = _this.ele.find(".select-list");
        var value = "";
        var name = "";
        parent.find(".selected").each(function() {
            var $this = $(this);
            if ($this.attr("data-value")) {
                if (value == "") {
                    value += $this.attr("data-value");
                    name += $this.text();
                } else {
                    value += "," + $this.attr("data-value");
                    name += "," + $this.text();
                }
            }
        });
        if (value == "") {
            name = "请选择";
        }
        _this.ele.find(".select-area").text(name);
        _this.ele.attr("data-value", value);
        _this.para = value;
    }
}
