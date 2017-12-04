"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var confirmation_modal_service_1 = require("../../services/notification/confirmation-modal.service");
var navigator_service_1 = require("../../services/navigation/navigator.service");
var TestParameter_1 = require("../../model/TestParameter");
var Type_1 = require("../../util/Type");
var Url_1 = require("../../util/Url");
var router_1 = require("@angular/router");
var editor_common_control_service_1 = require("../../services/common-controls/editor-common-control.service");
var specmate_data_service_1 = require("../../services/data/specmate-data.service");
var core_1 = require("@angular/core");
var draggable_supporting_view_base_1 = require("../core/views/draggable-supporting-view-base");
var ng2_dragula_1 = require("ng2-dragula");
var test_step_factory_1 = require("../../factory/test-step-factory");
var TestProcedureEditor = (function (_super) {
    __extends(TestProcedureEditor, _super);
    /** Constructor */
    function TestProcedureEditor(dataService, navigator, route, modal, editorCommonControlService, dragulaService) {
        return _super.call(this, dataService, navigator, route, modal, editorCommonControlService, dragulaService) || this;
    }
    Object.defineProperty(TestProcedureEditor.prototype, "relevantElements", {
        get: function () {
            return this.contents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestProcedureEditor.prototype, "inputParameters", {
        /** getter for the input parameters of the parent test specification */
        get: function () {
            return this.allParameters.filter(function (param) { return param.type === 'INPUT'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestProcedureEditor.prototype, "outputParameters", {
        /** getter for the output parameters of the parent test specification */
        get: function () {
            return this.allParameters.filter(function (param) { return param.type === 'OUTPUT'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestProcedureEditor.prototype, "allParameters", {
        /** getter for all test parameters */
        get: function () {
            if (!this.testSpecContents) {
                return [];
            }
            return this.testSpecContents.filter(function (element) { return Type_1.Type.is(element, TestParameter_1.TestParameter); });
        },
        enumerable: true,
        configurable: true
    });
    TestProcedureEditor.prototype.onElementResolved = function (element) {
        _super.prototype.onElementResolved.call(this, element);
        this.testProcedure = element;
        this.readParentTestSpec();
    };
    /** Reads the parent test specification */
    TestProcedureEditor.prototype.readParentTestSpec = function () {
        var _this = this;
        if (this.testProcedure) {
            var testSpecificationUrl = Url_1.Url.parent(this.testProcedure.url);
            this.dataService.readContents(testSpecificationUrl).then(function (elements) { return _this.testSpecContents = elements; });
        }
    };
    /** Creates a new test case */
    TestProcedureEditor.prototype.createNewTestStep = function () {
        var factory = new test_step_factory_1.TestStepFactory(this.dataService);
        factory.create(this.testProcedure, false);
    };
    Object.defineProperty(TestProcedureEditor.prototype, "isValid", {
        /** Return true if all user inputs are valid  */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    TestProcedureEditor = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'test-procedure-editor',
            templateUrl: 'test-procedure-editor.component.html',
            styleUrls: ['test-procedure-editor.component.css']
        }),
        __metadata("design:paramtypes", [specmate_data_service_1.SpecmateDataService, navigator_service_1.NavigatorService, router_1.ActivatedRoute, confirmation_modal_service_1.ConfirmationModal, editor_common_control_service_1.EditorCommonControlService, ng2_dragula_1.DragulaService])
    ], TestProcedureEditor);
    return TestProcedureEditor;
}(draggable_supporting_view_base_1.DraggableSupportingViewBase));
exports.TestProcedureEditor = TestProcedureEditor;
//# sourceMappingURL=test-procedure-editor.component.js.map