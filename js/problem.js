var problem_icon_list = {
    "single": ["radio_button_checked--outlined", "radio_button_unchecked--outlined"],
    "multiple": ["check_circle_outline--outlined", "radio_button_unchecked--outlined"]
};

class Problem {
    htmlElement = null;

    constructor(id, content, type, options, note) {
        this.id = id;
        this.content = content;
        this.type = type;
        this.options = options;
        this.note = note;

        this.htmlElement = $("<mdui-collapse-item></mdui-collapse-item>");
        this.htmlElement.val(this.id);
    
        let headerElement = $("<mdui-list-item></mdui-list-item>");
        headerElement.attr("slot", "header");
        let typeText = Problem.getTypeString(this.type);
        headerElement.text("【" + typeText + "】" + this.content);
        this.htmlElement.append(headerElement);

        if (this.note != null) {
            let noteElement = $("<span slot=\"description\"></span>");
            noteElement.text(this.note);
            headerElement.append(noteElement);
        }

        let subitems = $("<div></div>");
        subitems.css("margin-left", "1.5rem");

        for (let i = 0; i < this.options.length; i++) {
            let option = this.options[i];
            subitems.append(option.htmlElement);
        }
        this.htmlElement.append(subitems);
    }

    match(search) {
        if (this.content.toLowerCase().indexOf(search) != -1)
            return true;
        for (let i = 0; i < this.options.length; i++) {
            let option = this.options[i];
            if (option.match(search))
                return true;
        }
        return false;
    }

    static getTypeString(type) {
        if (type == "single")
            return "单选题";
        if (type == "multiple")
            return "多选题";
        if (type == "upload_file")
            return "上传文件";
        return "未知题型";
    }

    static fromJson(json) {
        let id = json.id;
        let content = json.content;
        let type = json.type;
        let note = json.note;
        let options = [];
        for (let i = 0; i < json.options.length; i++) {
            let option = json.options[i];
            options.push(new Option(option.id, option.content, option.correct, type, option.explanation));
        }
        return new Problem(id, content, type, options, note);
    }
}

class Option {
    htmlElement = null;
    explanationElement = null;
    userAnswer = null;
    type = null;
    checked = false;

    constructor(id, content, correct, type, explanation) {
        this.id = id;
        this.content = content;
        this.correct = correct;
        this.explanation = explanation;
        this.type = type;

        this.htmlElement = $("<mdui-list-item></mdui-list-item>");
        this.htmlElement.text(this.content);
        this.explanationElement = $('<span slot="description"></span>');
        this.explanationElement.text(this.explanation);
        this.explanationElement.hide();
        this.htmlElement.append(this.explanationElement);

        this.check(false);
    }

    toggleExplanation(val) {
        if (val != null) {
            if (val) {
                this.explanationElement.show();
            } else {
                this.explanationElement.hide();
            }
            return;
        }
        this.explanationElement.toggle();
    }

    check(val) {
        this.checked = val;
        if (val) {
            this.htmlElement.attr("icon", problem_icon_list[this.type][0]);
        } else {
            this.htmlElement.attr("icon", problem_icon_list[this.type][1]);
        }
    }

    match(search) {
        return this.content.toLowerCase().indexOf(search) != -1;
    }
}
