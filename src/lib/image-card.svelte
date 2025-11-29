<script lang="ts">
  type Props = {

      title?: string;
      website?: string;
  };

  const { title, website }: Props = $props();
</script>

<div
  class="bg-slate-50 text-slate-700 w-full h-full flex items-center justify-center p-6"
>
  <div
    class="m-1.5 p-6 w-full h-full rounded-3xl text-[72px] flex flex-col border-2 border-slate-700 text-slate-700"
  >
    {title?.slice(0, 80)}
    <hr class="border border-slate-700 w-full" />
    <p class="text-[52px] font-bold flex justify-center text-slate-700">
      {website}
    </p>
  </div>
</div>
