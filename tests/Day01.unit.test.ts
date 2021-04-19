import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { mock, instance } from 'ts-mockito';
import { Day01 } from '../src/Day01.ts';
_chai.should();
@suite
class Day01UnitTests {
  private SUT: Day01;

  before() {
    this.loggerMock = mock(Logger);
    this.SUT = new HelloWorldService(instance(this.loggerMock));
  }

  @test 'should do something when call a method'() {
    this.SUT.should.be.not.undefined;
  }
}
