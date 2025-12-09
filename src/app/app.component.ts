import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TruncatePipe } from './pipes/truncate.pipe';
import { InitialsPipe } from './pipes/initials.pipe';
import { RemoveDuplicatesPipe } from './pipes/duplicates.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { FormsModule } from '@angular/forms';
import { NumbericOnlyDirective } from './directives/numeric.directive';
import { ArticlesComponent } from "./components/articles/articles.component";
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from "./components/template-form/template-form.component";

@Component({
  selector: 'app-root',
  imports: [TruncatePipe, InitialsPipe, FormsModule, NumbericOnlyDirective,
    RemoveDuplicatesPipe, HighlightDirective, TooltipDirective, ArticlesComponent, ReactiveFormComponent, TemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prep';
  stringToTruncate = 'This is a long string that needs to be truncated.';
  name = 'John Doe Doe';
  arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  numberInput: string = '';
}
