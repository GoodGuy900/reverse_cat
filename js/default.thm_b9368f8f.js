window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","StartView":"resource/my_skins/StartView.exml","GameOver":"resource/my_skins/GameOver.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/my_skins/GameOverView.exml'] = window.skins.GameOver = (function (_super) {
	__extends(GameOver, _super);
	var GameOver$Skin1 = 	(function (_super) {
		__extends(GameOver$Skin1, _super);
		function GameOver$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOver$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOver$Skin1;
	})(eui.Skin);

	var GameOver$Skin2 = 	(function (_super) {
		__extends(GameOver$Skin2, _super);
		function GameOver$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOver$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_replay_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOver$Skin2;
	})(eui.Skin);

	function GameOver() {
		_super.call(this);
		this.skinParts = ["failLabel","backBtn","replayBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.failLabel_i(),this.backBtn_i(),this.replayBtn_i()];
	}
	var _proto = GameOver.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "end_tip_fail_png";
		t.verticalCenter = -83.5;
		return t;
	};
	_proto.failLabel_i = function () {
		var t = new eui.Label();
		this.failLabel = t;
		t.alpha = 1;
		t.backgroundColor = 0xFFFFFF;
		t.blendMode = "normal";
		t.bold = true;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.fontFamily = "Arial";
		t.height = 132.809;
		t.horizontalCenter = 0;
		t.includeInLayout = true;
		t.italic = false;
		t.lineSpacing = 20;
		t.stroke = 4;
		t.text = "失败文本";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -17.5;
		t.width = 373.976;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.name = "backBtn";
		t.x = 102.686;
		t.y = 667.484;
		t.skinName = GameOver$Skin1;
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new eui.Button();
		this.replayBtn = t;
		t.name = "replayBtn";
		t.x = 337.634;
		t.y = 667.484;
		t.skinName = GameOver$Skin2;
		return t;
	};
	return GameOver;
})(eui.Skin);generateEUI.paths['resource/my_skins/GameView.exml'] = window.skins.MainView = (function (_super) {
	__extends(MainView, _super);
	function MainView() {
		_super.call(this);
		this.skinParts = ["grid_1_1","grid_1_2","grid_1_3","grid_1_4","grid_1_5","grid_1_6","grid_1_7","grid_1_8","grid_1_9","grids_1","grid_2_1","grid_2_2","grid_2_3","grid_2_4","grid_2_5","grid_2_6","grid_2_7","grid_2_8","grid_2_9","grids_2","grid_3_1","grid_3_2","grid_3_3","grid_3_4","grid_3_5","grid_3_6","grid_3_7","grid_3_8","grid_3_9","grids_3","grid_4_1","grid_4_2","grid_4_3","grid_4_4","grid_4_5","grid_4_6","grid_4_7","grid_4_8","grid_4_9","grids_4","grid_5_1","grid_5_2","grid_5_3","grid_5_4","grid_5_5","grid_5_6","grid_5_7","grid_5_8","grid_5_9","grids_5","grid_6_1","grid_6_2","grid_6_3","grid_6_4","grid_6_5","grid_6_6","grid_6_7","grid_6_8","grid_6_9","grids_6","grid_7_1","grid_7_2","grid_7_3","grid_7_4","grid_7_5","grid_7_6","grid_7_7","grid_7_8","grid_7_9","grids_7","grid_8_1","grid_8_2","grid_8_3","grid_8_4","grid_8_5","grid_8_6","grid_8_7","grid_8_8","grid_8_9","grids_8","grid_9_1","grid_9_2","grid_9_3","grid_9_4","grid_9_5","grid_9_6","grid_9_7","grid_9_8","grid_9_9","grids_9","grids","levelLable"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.grids_i(),this.levelLable_i()];
	}
	var _proto = MainView.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.grids_i = function () {
		var t = new eui.Group();
		this.grids = t;
		t.bottom = 72;
		t.height = 589.887;
		t.horizontalCenter = 0;
		t.name = "gridGroup";
		t.width = 630;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.grids_1_i(),this.grids_2_i(),this.grids_3_i(),this.grids_4_i(),this.grids_5_i(),this.grids_6_i(),this.grids_7_i(),this.grids_8_i(),this.grids_9_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.grids_1_i = function () {
		var t = new eui.Group();
		this.grids_1 = t;
		t.height = 60;
		t.width = 630;
		t.x = 58;
		t.y = 129;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.grid_1_1_i(),this.grid_1_2_i(),this.grid_1_3_i(),this.grid_1_4_i(),this.grid_1_5_i(),this.grid_1_6_i(),this.grid_1_7_i(),this.grid_1_8_i(),this.grid_1_9_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "left";
		t.paddingLeft = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grid_1_1_i = function () {
		var t = new eui.Image();
		this.grid_1_1 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 217;
		t.y = 0;
		return t;
	};
	_proto.grid_1_2_i = function () {
		var t = new eui.Image();
		this.grid_1_2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 227;
		t.y = 10;
		return t;
	};
	_proto.grid_1_3_i = function () {
		var t = new eui.Image();
		this.grid_1_3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 237;
		t.y = 20;
		return t;
	};
	_proto.grid_1_4_i = function () {
		var t = new eui.Image();
		this.grid_1_4 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 247;
		t.y = 30;
		return t;
	};
	_proto.grid_1_5_i = function () {
		var t = new eui.Image();
		this.grid_1_5 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 257;
		t.y = 40;
		return t;
	};
	_proto.grid_1_6_i = function () {
		var t = new eui.Image();
		this.grid_1_6 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 267;
		t.y = 50;
		return t;
	};
	_proto.grid_1_7_i = function () {
		var t = new eui.Image();
		this.grid_1_7 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.grid_1_8_i = function () {
		var t = new eui.Image();
		this.grid_1_8 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 287;
		t.y = 70;
		return t;
	};
	_proto.grid_1_9_i = function () {
		var t = new eui.Image();
		this.grid_1_9 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 297;
		t.y = 80;
		return t;
	};
	_proto.grids_2_i = function () {
		var t = new eui.Group();
		this.grids_2 = t;
		t.height = 60;
		t.width = 630;
		t.x = 68;
		t.y = 139;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.grid_2_1_i(),this.grid_2_2_i(),this.grid_2_3_i(),this.grid_2_4_i(),this.grid_2_5_i(),this.grid_2_6_i(),this.grid_2_7_i(),this.grid_2_8_i(),this.grid_2_9_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		t.paddingLeft = 0;
		t.paddingRight = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grid_2_1_i = function () {
		var t = new eui.Image();
		this.grid_2_1 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 217;
		t.y = 0;
		return t;
	};
	_proto.grid_2_2_i = function () {
		var t = new eui.Image();
		this.grid_2_2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 227;
		t.y = 10;
		return t;
	};
	_proto.grid_2_3_i = function () {
		var t = new eui.Image();
		this.grid_2_3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 237;
		t.y = 20;
		return t;
	};
	_proto.grid_2_4_i = function () {
		var t = new eui.Image();
		this.grid_2_4 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 247;
		t.y = 30;
		return t;
	};
	_proto.grid_2_5_i = function () {
		var t = new eui.Image();
		this.grid_2_5 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 257;
		t.y = 40;
		return t;
	};
	_proto.grid_2_6_i = function () {
		var t = new eui.Image();
		this.grid_2_6 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 267;
		t.y = 50;
		return t;
	};
	_proto.grid_2_7_i = function () {
		var t = new eui.Image();
		this.grid_2_7 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.grid_2_8_i = function () {
		var t = new eui.Image();
		this.grid_2_8 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 287;
		t.y = 70;
		return t;
	};
	_proto.grid_2_9_i = function () {
		var t = new eui.Image();
		this.grid_2_9 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 297;
		t.y = 80;
		return t;
	};
	_proto.grids_3_i = function () {
		var t = new eui.Group();
		this.grids_3 = t;
		t.height = 60;
		t.width = 630;
		t.x = 68;
		t.y = 139;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.grid_3_1_i(),this.grid_3_2_i(),this.grid_3_3_i(),this.grid_3_4_i(),this.grid_3_5_i(),this.grid_3_6_i(),this.grid_3_7_i(),this.grid_3_8_i(),this.grid_3_9_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "left";
		t.paddingLeft = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grid_3_1_i = function () {
		var t = new eui.Image();
		this.grid_3_1 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 217;
		t.y = 0;
		return t;
	};
	_proto.grid_3_2_i = function () {
		var t = new eui.Image();
		this.grid_3_2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 227;
		t.y = 10;
		return t;
	};
	_proto.grid_3_3_i = function () {
		var t = new eui.Image();
		this.grid_3_3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 237;
		t.y = 20;
		return t;
	};
	_proto.grid_3_4_i = function () {
		var t = new eui.Image();
		this.grid_3_4 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 247;
		t.y = 30;
		return t;
	};
	_proto.grid_3_5_i = function () {
		var t = new eui.Image();
		this.grid_3_5 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 257;
		t.y = 40;
		return t;
	};
	_proto.grid_3_6_i = function () {
		var t = new eui.Image();
		this.grid_3_6 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 267;
		t.y = 50;
		return t;
	};
	_proto.grid_3_7_i = function () {
		var t = new eui.Image();
		this.grid_3_7 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.grid_3_8_i = function () {
		var t = new eui.Image();
		this.grid_3_8 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 287;
		t.y = 70;
		return t;
	};
	_proto.grid_3_9_i = function () {
		var t = new eui.Image();
		this.grid_3_9 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 297;
		t.y = 80;
		return t;
	};
	_proto.grids_4_i = function () {
		var t = new eui.Group();
		this.grids_4 = t;
		t.height = 60;
		t.width = 630;
		t.x = 78;
		t.y = 149;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this.grid_4_1_i(),this.grid_4_2_i(),this.grid_4_3_i(),this.grid_4_4_i(),this.grid_4_5_i(),this.grid_4_6_i(),this.grid_4_7_i(),this.grid_4_8_i(),this.grid_4_9_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		t.paddingLeft = 0;
		t.paddingRight = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grid_4_1_i = function () {
		var t = new eui.Image();
		this.grid_4_1 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 217;
		t.y = 0;
		return t;
	};
	_proto.grid_4_2_i = function () {
		var t = new eui.Image();
		this.grid_4_2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 227;
		t.y = 10;
		return t;
	};
	_proto.grid_4_3_i = function () {
		var t = new eui.Image();
		this.grid_4_3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 237;
		t.y = 20;
		return t;
	};
	_proto.grid_4_4_i = function () {
		var t = new eui.Image();
		this.grid_4_4 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 247;
		t.y = 30;
		return t;
	};
	_proto.grid_4_5_i = function () {
		var t = new eui.Image();
		this.grid_4_5 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 257;
		t.y = 40;
		return t;
	};
	_proto.grid_4_6_i = function () {
		var t = new eui.Image();
		this.grid_4_6 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 267;
		t.y = 50;
		return t;
	};
	_proto.grid_4_7_i = function () {
		var t = new eui.Image();
		this.grid_4_7 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.grid_4_8_i = function () {
		var t = new eui.Image();
		this.grid_4_8 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 287;
		t.y = 70;
		return t;
	};
	_proto.grid_4_9_i = function () {
		var t = new eui.Image();
		this.grid_4_9 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 297;
		t.y = 80;
		return t;
	};
	_proto.grids_5_i = function () {
		var t = new eui.Group();
		this.grids_5 = t;
		t.height = 60;
		t.width = 630;
		t.x = 78;
		t.y = 149;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this.grid_5_1_i(),this.grid_5_2_i(),this.grid_5_3_i(),this.grid_5_4_i(),this.grid_5_5_i(),this.grid_5_6_i(),this.grid_5_7_i(),this.grid_5_8_i(),this.grid_5_9_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "left";
		t.paddingLeft = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grid_5_1_i = function () {
		var t = new eui.Image();
		this.grid_5_1 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 217;
		t.y = 0;
		return t;
	};
	_proto.grid_5_2_i = function () {
		var t = new eui.Image();
		this.grid_5_2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 227;
		t.y = 10;
		return t;
	};
	_proto.grid_5_3_i = function () {
		var t = new eui.Image();
		this.grid_5_3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 237;
		t.y = 20;
		return t;
	};
	_proto.grid_5_4_i = function () {
		var t = new eui.Image();
		this.grid_5_4 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 247;
		t.y = 30;
		return t;
	};
	_proto.grid_5_5_i = function () {
		var t = new eui.Image();
		this.grid_5_5 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 257;
		t.y = 40;
		return t;
	};
	_proto.grid_5_6_i = function () {
		var t = new eui.Image();
		this.grid_5_6 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 267;
		t.y = 50;
		return t;
	};
	_proto.grid_5_7_i = function () {
		var t = new eui.Image();
		this.grid_5_7 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.grid_5_8_i = function () {
		var t = new eui.Image();
		this.grid_5_8 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 287;
		t.y = 70;
		return t;
	};
	_proto.grid_5_9_i = function () {
		var t = new eui.Image();
		this.grid_5_9 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 297;
		t.y = 80;
		return t;
	};
	_proto.grids_6_i = function () {
		var t = new eui.Group();
		this.grids_6 = t;
		t.height = 60;
		t.width = 630;
		t.x = 88;
		t.y = 159;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this.grid_6_1_i(),this.grid_6_2_i(),this.grid_6_3_i(),this.grid_6_4_i(),this.grid_6_5_i(),this.grid_6_6_i(),this.grid_6_7_i(),this.grid_6_8_i(),this.grid_6_9_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		t.paddingLeft = 0;
		t.paddingRight = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grid_6_1_i = function () {
		var t = new eui.Image();
		this.grid_6_1 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 217;
		t.y = 0;
		return t;
	};
	_proto.grid_6_2_i = function () {
		var t = new eui.Image();
		this.grid_6_2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 227;
		t.y = 10;
		return t;
	};
	_proto.grid_6_3_i = function () {
		var t = new eui.Image();
		this.grid_6_3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 237;
		t.y = 20;
		return t;
	};
	_proto.grid_6_4_i = function () {
		var t = new eui.Image();
		this.grid_6_4 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 247;
		t.y = 30;
		return t;
	};
	_proto.grid_6_5_i = function () {
		var t = new eui.Image();
		this.grid_6_5 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 257;
		t.y = 40;
		return t;
	};
	_proto.grid_6_6_i = function () {
		var t = new eui.Image();
		this.grid_6_6 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 267;
		t.y = 50;
		return t;
	};
	_proto.grid_6_7_i = function () {
		var t = new eui.Image();
		this.grid_6_7 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.grid_6_8_i = function () {
		var t = new eui.Image();
		this.grid_6_8 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 287;
		t.y = 70;
		return t;
	};
	_proto.grid_6_9_i = function () {
		var t = new eui.Image();
		this.grid_6_9 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 297;
		t.y = 80;
		return t;
	};
	_proto.grids_7_i = function () {
		var t = new eui.Group();
		this.grids_7 = t;
		t.height = 60;
		t.width = 630;
		t.x = 88;
		t.y = 159;
		t.layout = this._HorizontalLayout7_i();
		t.elementsContent = [this.grid_7_1_i(),this.grid_7_2_i(),this.grid_7_3_i(),this.grid_7_4_i(),this.grid_7_5_i(),this.grid_7_6_i(),this.grid_7_7_i(),this.grid_7_8_i(),this.grid_7_9_i()];
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "left";
		t.paddingLeft = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grid_7_1_i = function () {
		var t = new eui.Image();
		this.grid_7_1 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 217;
		t.y = 0;
		return t;
	};
	_proto.grid_7_2_i = function () {
		var t = new eui.Image();
		this.grid_7_2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 227;
		t.y = 10;
		return t;
	};
	_proto.grid_7_3_i = function () {
		var t = new eui.Image();
		this.grid_7_3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 237;
		t.y = 20;
		return t;
	};
	_proto.grid_7_4_i = function () {
		var t = new eui.Image();
		this.grid_7_4 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 247;
		t.y = 30;
		return t;
	};
	_proto.grid_7_5_i = function () {
		var t = new eui.Image();
		this.grid_7_5 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 257;
		t.y = 40;
		return t;
	};
	_proto.grid_7_6_i = function () {
		var t = new eui.Image();
		this.grid_7_6 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 267;
		t.y = 50;
		return t;
	};
	_proto.grid_7_7_i = function () {
		var t = new eui.Image();
		this.grid_7_7 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.grid_7_8_i = function () {
		var t = new eui.Image();
		this.grid_7_8 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 287;
		t.y = 70;
		return t;
	};
	_proto.grid_7_9_i = function () {
		var t = new eui.Image();
		this.grid_7_9 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 297;
		t.y = 80;
		return t;
	};
	_proto.grids_8_i = function () {
		var t = new eui.Group();
		this.grids_8 = t;
		t.height = 60;
		t.width = 630;
		t.x = 98;
		t.y = 169;
		t.layout = this._HorizontalLayout8_i();
		t.elementsContent = [this.grid_8_1_i(),this.grid_8_2_i(),this.grid_8_3_i(),this.grid_8_4_i(),this.grid_8_5_i(),this.grid_8_6_i(),this.grid_8_7_i(),this.grid_8_8_i(),this.grid_8_9_i()];
		return t;
	};
	_proto._HorizontalLayout8_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		t.paddingLeft = 0;
		t.paddingRight = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grid_8_1_i = function () {
		var t = new eui.Image();
		this.grid_8_1 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 217;
		t.y = 0;
		return t;
	};
	_proto.grid_8_2_i = function () {
		var t = new eui.Image();
		this.grid_8_2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 227;
		t.y = 10;
		return t;
	};
	_proto.grid_8_3_i = function () {
		var t = new eui.Image();
		this.grid_8_3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 237;
		t.y = 20;
		return t;
	};
	_proto.grid_8_4_i = function () {
		var t = new eui.Image();
		this.grid_8_4 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 247;
		t.y = 30;
		return t;
	};
	_proto.grid_8_5_i = function () {
		var t = new eui.Image();
		this.grid_8_5 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 257;
		t.y = 40;
		return t;
	};
	_proto.grid_8_6_i = function () {
		var t = new eui.Image();
		this.grid_8_6 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 267;
		t.y = 50;
		return t;
	};
	_proto.grid_8_7_i = function () {
		var t = new eui.Image();
		this.grid_8_7 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.grid_8_8_i = function () {
		var t = new eui.Image();
		this.grid_8_8 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 287;
		t.y = 70;
		return t;
	};
	_proto.grid_8_9_i = function () {
		var t = new eui.Image();
		this.grid_8_9 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 297;
		t.y = 80;
		return t;
	};
	_proto.grids_9_i = function () {
		var t = new eui.Group();
		this.grids_9 = t;
		t.height = 60;
		t.width = 630;
		t.x = 68;
		t.y = 139;
		t.layout = this._HorizontalLayout9_i();
		t.elementsContent = [this.grid_9_1_i(),this.grid_9_2_i(),this.grid_9_3_i(),this.grid_9_4_i(),this.grid_9_5_i(),this.grid_9_6_i(),this.grid_9_7_i(),this.grid_9_8_i(),this.grid_9_9_i()];
		return t;
	};
	_proto._HorizontalLayout9_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "left";
		t.paddingLeft = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grid_9_1_i = function () {
		var t = new eui.Image();
		this.grid_9_1 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 217;
		t.y = 0;
		return t;
	};
	_proto.grid_9_2_i = function () {
		var t = new eui.Image();
		this.grid_9_2 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 227;
		t.y = 10;
		return t;
	};
	_proto.grid_9_3_i = function () {
		var t = new eui.Image();
		this.grid_9_3 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 237;
		t.y = 20;
		return t;
	};
	_proto.grid_9_4_i = function () {
		var t = new eui.Image();
		this.grid_9_4 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 247;
		t.y = 30;
		return t;
	};
	_proto.grid_9_5_i = function () {
		var t = new eui.Image();
		this.grid_9_5 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 257;
		t.y = 40;
		return t;
	};
	_proto.grid_9_6_i = function () {
		var t = new eui.Image();
		this.grid_9_6 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 267;
		t.y = 50;
		return t;
	};
	_proto.grid_9_7_i = function () {
		var t = new eui.Image();
		this.grid_9_7 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 277;
		t.y = 60;
		return t;
	};
	_proto.grid_9_8_i = function () {
		var t = new eui.Image();
		this.grid_9_8 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 287;
		t.y = 70;
		return t;
	};
	_proto.grid_9_9_i = function () {
		var t = new eui.Image();
		this.grid_9_9 = t;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "grid_white_png";
		t.width = 60;
		t.x = 297;
		t.y = 80;
		return t;
	};
	_proto.levelLable_i = function () {
		var t = new eui.Label();
		this.levelLable = t;
		t.backgroundColor = 0x000000;
		t.bold = true;
		t.size = 45;
		t.stroke = 3;
		t.strokeColor = 0xFBFBFB;
		t.text = "关卡数";
		t.textColor = 0x000000;
		t.x = 20;
		t.y = 15;
		return t;
	};
	return MainView;
})(eui.Skin);generateEUI.paths['resource/my_skins/StartView.exml'] = window.skins.MainView = (function (_super) {
	__extends(MainView, _super);
	var MainView$Skin3 = 	(function (_super) {
		__extends(MainView$Skin3, _super);
		function MainView$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainView$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainView$Skin3;
	})(eui.Skin);

	function MainView() {
		_super.call(this);
		this.skinParts = ["startBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.startBtn_i()];
	}
	var _proto = MainView.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "cat_start_bg_png";
		t.verticalCenter = 37;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.height = 119.282;
		t.horizontalCenter = 0;
		t.name = "startBtn";
		t.visible = true;
		t.width = 256.746;
		t.y = 909.788;
		t.skinName = MainView$Skin3;
		return t;
	};
	return MainView;
})(eui.Skin);generateEUI.paths['resource/my_skins/SuccessView.exml'] = window.skins.NextView = (function (_super) {
	__extends(NextView, _super);
	var NextView$Skin4 = 	(function (_super) {
		__extends(NextView$Skin4, _super);
		function NextView$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NextView$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NextView$Skin4;
	})(eui.Skin);

	var NextView$Skin5 = 	(function (_super) {
		__extends(NextView$Skin5, _super);
		function NextView$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NextView$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_next_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NextView$Skin5;
	})(eui.Skin);

	function NextView() {
		_super.call(this);
		this.skinParts = ["successLabel","backBtn","nextBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.successLabel_i(),this.backBtn_i(),this.nextBtn_i()];
	}
	var _proto = NextView.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "end_tip_success_png";
		t.verticalCenter = -83.5;
		return t;
	};
	_proto.successLabel_i = function () {
		var t = new eui.Label();
		this.successLabel = t;
		t.bold = true;
		t.borderColor = 0xFFFFFF;
		t.height = 132.809;
		t.horizontalCenter = 0;
		t.lineSpacing = 20;
		t.stroke = 4;
		t.text = "胜利文本";
		t.verticalCenter = -17.5;
		t.width = 373.976;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.name = "backBtn";
		t.x = 102.686;
		t.y = 667.484;
		t.skinName = NextView$Skin4;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.name = "replayBtn";
		t.x = 337.634;
		t.y = 667.484;
		t.skinName = NextView$Skin5;
		return t;
	};
	return NextView;
})(eui.Skin);