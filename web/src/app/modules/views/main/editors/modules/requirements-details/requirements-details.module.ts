import { NgModule } from '@angular/core';
import { RequirementsDetails } from './components/requirement-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavigatorModule } from '../../../../../navigation/modules/navigator/navigator.module';
import { TruncateModule } from '../../../../../common/modules/truncate/truncate.module';
import { TestSpecificationGeneratorButtonModule } from
  '../../../../../actions/modules/test-specification-generator-button/test-specification-generator-button.module';
import { IconsModule } from '../../../../../common/modules/icons/icons.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    // MODULE IMPORTS
    BrowserModule,
    NavigatorModule,
    TruncateModule,
    TestSpecificationGeneratorButtonModule,
    IconsModule,
    TranslateModule
  ],
  declarations: [
    // COMPONENTS IN THIS MODULE
    RequirementsDetails
  ],
  exports: [
    // THE COMPONENTS VISIBLE TO THE OUTSIDE
    RequirementsDetails
  ],
  providers: [
    // SERVICES
  ],
  bootstrap: [
    // COMPONENTS THAT ARE BOOTSTRAPPED HERE
  ]
})

export class RequirementsDetailsModule { }
