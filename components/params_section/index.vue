<template>
  <section class="params">
    <div class="params-wrapper">
      <div class="params-left">
        <span class="params-header">РАЗМЕРЫ</span>
        <span class="params-title">Мышь:</span>
        <ul>
          <li>Высота x Ширина x Глубина:</li>
          <li>107 мм x 59 мм х 26.5 мм</li>
          <li>Вес: 100 г</li>
        </ul>
        <span class="params-title">Нано приемник:</span>
        <ul>
          <li>Высота x Ширина x Глубина: 18.7 мм х 14.4 мм x 6.1 мм</li>
          <li>Вес: 1.8 г</li>
        </ul>
        <span class="params-header">СИСТЕМНЫЕ ТРЕБОВАНИЯ</span>
        <ul>
          <li>Windows® | Mac | Chrome® OS | Linux® | Works with Surface™</li>
        </ul>
        <span class="params-title">Приемник:</span>
        <ul>
          <li>Требуется: свободный порт USB</li>
          <li>Windows 10 или более поздняя версия, Windows 8, Windows 7</li>
          <li>MacOS 10.10 или более поздняя версия</li>
          <li>Chrome OS</li>
          <li>Linux Kernel 2.6+</li>
        </ul>
        <span class="params-title">Bluetooth:</span>
        <ul>
          <li>Требуется: технология Bluetooth Low Energy</li>
          <li>Windows 10 или более поздняя версия, Windows 8</li>
          <li>MacOS 10.10 или более поздняя версия</li>
          <li>Chrome OS, Android ™ 5.0 или более поздняя версия</li>
        </ul>
      </div>
      <div class="params-right">
        <span class="params-header">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</span>
        <ul>
          <li>Сенсорная технология: высокоточное оптическое слежение</li>
          <li>Разрешение сенсора: 1000 dpi</li>
          <li>Количество кнопок: 3</li>
          <li>Колесо прокрутки: Да - Механическое</li>
          <li>Кнопки прокрутки: средняя кнопка</li>
          <li>Объединяющая готовая мышь: да</li>
          <li>Объединяющий готовый приемник: нет</li>
          <li>Срок службы батареи: 18 месяцев</li>
          <li>Тип батареи: 1 АА, предварительно установленная батарея</li>
          <li>Беспроводное рабочее расстояние: 10 м 4</li>
          <li>Беспроводная технология: приемник Logitech или технология Bluetooth с низким энергопотреблением</li>
        </ul>
        <span class="params-header">СОДЕРЖИМОЕ УПАКОВКИ</span>
        <ul>
          <li>Беспроводная мышь</li>
          <li>Нано Приемник</li>
          <li>1 батарейка АА (предварительно установлена)</li>
          <li>Пользовательская документация</li>
        </ul>
        <span class="params-header">ИНФОРМАЦИЯ О ГАРАНТИИ</span>
        <ul>
          <li>1-летняя ограниченная гарантия на оборудование</li>
        </ul>
        <span class="params-header">НОМЕР ЧАСТИ</span>
        <ul>
          <li><b>Почти белый:</b> PN: 910-005770</li>
          <li><b>Розовый:</b> PN: 910-005769</li>
          <li><b>Графит:</b> PN: 910-005743</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="sass" scoped>
.params
  padding: 0 20px 40px
  @include desktop
    padding: 60px 0

  &-wrapper
    margin: 0
    padding: 0
    width: 100%
    display: flex
    flex-direction: column
    @include tablet
      flex-direction: row
    @include desktop
      max-width: 1300px
      margin: 0 auto


  &-left
    width: 100%
    @include tablet
      padding: 0 20px 0 0
    @include desktop
      width: 50%

  &-right
    width: 100%
    @include tablet
      padding: 0 20px 0 0
    @include desktop
      width: 50%

  &-header
    font: normal 24px/1 $font-main
    color: #000000
    text-transform: uppercase
    margin: 40px 0 0 0
    display: inline-block

  &-title
    display: inline-block
    margin: 30px 0 0 0
    font: bold 18px/22px $font-main
    color: #6F7678

  ul
    padding: 0
    li
      list-style: none
      font: normal 18px/22px $font-main
      color: #6F7678
      margin: 10px 0 0 0

      b
</style>
